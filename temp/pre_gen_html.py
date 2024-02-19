


from rich import print,print_json
from requests import Session
from flask import Flask
from pathlib import Path as __path

#写一个python脚本，使用pathlib库，实现遍历一个目录下的所有文件和文件夹，只遍历一层，并将其信息（文件绝对路径、文件名、文件大小、文件最后一次修改时间、文件创建时间）以json格式返回给前端。
def get_file_info(path):
    import os
    import time
    result=[]
    _path_=__path(path)
    for _content_ in _path_.glob("*"):
        modify_time=time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(os.path.getmtime(_content_.__str__())))
        create_time=time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(os.path.getctime(_content_.__str__())))
        if _content_.is_file():
            file_path=str(_content_)
            file_size=os.path.getsize(file_path)
            
            result.append({
                "name":_content_.name,
                "date":create_time,
                "type":"file",
                "size":file_size,
                "modified":modify_time,
                
            })
        elif _content_.is_dir():
            result.append({
                
                "name":_content_.name,
                "date":create_time,
                
                "type":"dir",
                "modified":modify_time,
            })     
    return result
vvv=get_file_info(r"g:\take away\programs\project\toast")
print_json(data=vvv)
pp_=__path(r"g:\take away\programs\project\toast")
import json
json.dump(vvv,open(r"G:\take away\programs\project\temp\json\win.json","w",encoding="utf-8"))
#print(list(pp_.glob("*")))
#使用方法：
#1、将该脚本放到一个目录下，如：g:\take away\programs\project\toast\pre_gen_html.py
    #2、在前端页面中引入该脚本，如：<script src="pre_gen_html.py"></script>





