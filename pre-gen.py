from flask import render_template,Flask
import pathlib,time
from mymodule.myfunctions import formatByte
app=Flask(__name__)
__path=pathlib.Path(__file__).parent
format="""<a href="{0}" onclick="handleLinkUrl(this)">{1}</a>          {2}"""
def get_time(path:pathlib.Path,mode=1)->str:
    stat_info=path.stat()
    if mode==1:#获取最后一次访问时间
        access_time = stat_info.st_atime
        access_time_formatted = time.ctime(access_time)
        return access_time_formatted
    elif mode==2:# 获取最后一次修改时间
        modify_time = stat_info.st_mtime
        modify_time_formatted = time.ctime(modify_time)
        return modify_time_formatted
    else:
        assert 1
    ...
def get_size(path:pathlib.Path)->str:
    stat_info=path.stat()
    size=stat_info.st_size
    return formatByte(size)
def generate_directory_structure():
    comments_dir=comments_file=[]
    for _ in __path.glob("*"):
        if _.is_file():
            comments_file.append(format.format(_.name,get_time(_),get_size(_)))
        else:
            if _.name==".git":
                continue
            comments_dir.append(format.format(_.name,get_time(_),"-"))
    return comments_dir,comments_file     
    ...
def generate_directory_structure_l(path=None):
    comments_dir=[]
    comments_file=[]
    _path=path if path else __path
    for _ in _path.glob("*"):
        if _.is_file():
            comments_file.append((_.name,get_time(_),get_size(_)))
        else:
            if _.name==".git":
                continue
            comments_dir.append((_.name,get_time(_),"-"))
    return comments_dir,comments_file     
    ...
@app.route("/<path>/")
def get_content(path):
    _=pathlib.Path(path)
    if _.is_file():
        return _.read_text(encoding="utf8")
    else:
        return root(pathlib.Path(path))
    with open(path,encoding="utf8") as f:
        return f.read()
@app.route("/")
def root(path=None):
    links=[]
    structure=generate_directory_structure_l(path)
    for dir in structure[0]:
        #elements_d.append({'tag': 'a', 'attributes': {'href': dir[0], 'onclick': "handleLinkUrl(this)"}, 'content': dir[0]},)
        links.append({"url":dir[0],"text":dir[0],"addtion":dir[1]+" - "+dir[2]})
    for file in structure[1]:

        #elements_f.append({'tag': 'a', 'attributes': {'href': file[0], 'onclick': "handleLinkUrl(this)"}, 'content': file[0]},)
        links.append({"url":file[0],"text":file[0],"addtion":file[1]+" - "+file[2]})
    f=open("y.html","w")
    structure=generate_directory_structure()
    content=render_template('_.html',links=links)
    print(content,file=f)
    f.close()
    return content
@app.route("/a/")
def hello():
    return "hello"
if __name__=="__main__":
    app.run(debug=True)