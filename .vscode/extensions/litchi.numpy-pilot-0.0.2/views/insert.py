"""向网页内注入css,js和button中的data-snippets属性
"""
from bs4 import BeautifulSoup
import os

def embed_resources(html_file, outfilename):
    # 读取HTML文件
    with open(html_file, 'r', encoding='utf-8') as file:
        soup = BeautifulSoup(file, 'lxml')

    # 查找并处理CSS链接
    for link in soup.find_all('link', rel='stylesheet'):
        css_path = link['href']
        if not css_path.startswith(('http:', 'https:')):
            with open(os.path.join(os.path.dirname(html_file), css_path), 'r', encoding='utf-8') as css_file:
                css_content = css_file.read()
                style_tag = soup.new_tag('style', type='text/css')
                style_tag.string = css_content
                link.replace_with(style_tag)

    # 查找并处理JS脚本
    for script in soup.find_all('script', src=True):
        js_path = script['src']
        if not js_path.startswith(('http:', 'https:')):
            with open(os.path.join(os.path.dirname(html_file), js_path), 'r', encoding='utf-8') as js_file:
                js_content = js_file.read()
                new_script_tag = soup.new_tag('script', type='text/javascript')
                new_script_tag.string = js_content
                script.replace_with(new_script_tag)
                
    for button in soup.find_all('button', attrs={'data-snippets': True}):
        # 提取文件路径
        file_path = button['data-snippets']
        with open(os.path.join(os.path.dirname(html_file), file_path), 'r', encoding='utf-8') as file:
            file_content = file.read()
            # 替换原有的路径为文件内容
            button['data-snippets'] = file_content  
            
    # 写回修改后的HTML
    with open(outfilename, 'w', encoding='utf-8') as file:
        file.write(str(soup.prettify()))

# 使用示例
views_id = ["io", "create", 'ndarray']
for view_id in views_id:
    html_file_path = f'./{view_id}/{view_id}.html'
    outfilename = f'./{view_id}.html'
    embed_resources(html_file_path, outfilename)
    print(f"DONE:\t\t\t{html_file_path} -> {outfilename}")

print("ALL DONE.")
