import streamlit as st
import os

# 设置页面配置
st.set_page_config(
    page_title="经典智慧闯关",
    page_icon="📚",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# 隐藏 Streamlit 默认样式
hide_streamlit_style = """
<style>
#MainMenu {visibility: hidden;}
footer {visibility: hidden;}
header {visibility: hidden;}
.block-container {
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
}
</style>
"""
st.markdown(hide_streamlit_style, unsafe_allow_html=True)

# 读取文件内容的辅助函数
def read_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return f.read()
    except:
        return ""

# 获取当前目录
current_dir = os.path.dirname(os.path.abspath(__file__))

# 读取所有 CSS 文件
style_css = read_file(os.path.join(current_dir, 'css', 'style.css'))
animations_css = read_file(os.path.join(current_dir, 'css', 'animations.css'))

# 读取所有 JS 文件
books_js = read_file(os.path.join(current_dir, 'js', 'data', 'books.js'))
questions_js = read_file(os.path.join(current_dir, 'js', 'data', 'questions.js'))
enemies_js = read_file(os.path.join(current_dir, 'js', 'data', 'enemies.js'))
items_js = read_file(os.path.join(current_dir, 'js', 'data', 'items.js'))
achievements_js = read_file(os.path.join(current_dir, 'js', 'data', 'achievements.js'))
storage_js = read_file(os.path.join(current_dir, 'js', 'utils', 'storage.js'))
character_js = read_file(os.path.join(current_dir, 'js', 'game', 'Character.js'))
battle_js = read_file(os.path.join(current_dir, 'js', 'game', 'Battle.js'))
reward_js = read_file(os.path.join(current_dir, 'js', 'game', 'Reward.js'))
game_engine_js = read_file(os.path.join(current_dir, 'js', 'game', 'GameEngine.js'))
app_js = read_file(os.path.join(current_dir, 'js', 'app.js'))

# 读取 HTML body 内容
index_html = read_file(os.path.join(current_dir, 'index.html'))

# 从 index.html 中提取 body 内容
import re
body_match = re.search(r'<body[^>]*>(.*?)</body>', index_html, re.DOTALL)
body_content = body_match.group(1) if body_match else ""

# 构建完整的 HTML
full_html = f"""
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>经典智慧闯关</title>
    <style>
{style_css}
{animations_css}
    </style>
</head>
<body>
{body_content}
    <script>
{books_js}
    </script>
    <script>
{questions_js}
    </script>
    <script>
{enemies_js}
    </script>
    <script>
{items_js}
    </script>
    <script>
{achievements_js}
    </script>
    <script>
{storage_js}
    </script>
    <script>
{character_js}
    </script>
    <script>
{battle_js}
    </script>
    <script>
{reward_js}
    </script>
    <script>
{game_engine_js}
    </script>
    <script>
{app_js}
    </script>
</body>
</html>
"""

# 使用 components.html 渲染游戏
st.components.v1.html(full_html, height=800, scrolling=True)
