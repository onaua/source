from flask import render_template,Flask
"""
This module provides functions to generate a directory listing and serve files from a directory.

It uses Flask to create a simple web server that renders an HTML page with links to files and directories.

The main functions are:

- generate_directory_structure: Generates a nested list structure with info about files and dirs.
- generate_directory_structure_l: Alternative version returning list of tuples.
- get_content: Handles requests to view a file's contents.
- root: Renders the root HTML page with directory listing.

There are also utility functions to get file metadata like last modified time and size.

The routes handle paths relative to the __path module level variable.
"""
import pathlib,time
from mymodule.myfunctions import formatByte
app=Flask(__name__)
__path=pathlib.Path(__file__).parent
format="""<a href="{0}" onclick="handleLinkUrl(this)">{1}</a>          {2}"""
rem_label={".py":('"""','"""'),
           ".c":("/*","*/"),
           ".cpp":("/*","*/"),
           ".js":("/*","*/"),
           ".java":("/*","*/"),
           ".html":("<!--","-->"),
           ".css":("/*","*/"),
           ".vbs":("'",""),
           ".bat":("::","::")
           }
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
    _=__path/path
    _:pathlib.Path
    if _.is_file():
        with open(_.__str__(),encoding="utf8") as f:
            #read_lines=[ "<hr>"+_fcontent.rstrip() for _fcontent in f.readlines()]
            rem_label_this=rem_label.get(_.suffix,("?","?"))
            return render_template("__.html",title=_.name,content=f.read(),download_filename=_.name,rem_label_l=rem_label_this[0],rem_label_r=rem_label_this[1])
        print(_.read_text(encoding="utf8"))
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