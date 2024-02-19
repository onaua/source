import re
import base64
from io import BytesIO
import os
from PIL import Image
from bs4 import BeautifulSoup

with open(r"D:\MyProgrammingFile\JavaScriptProject\MicrosoftEdge-Extension\ms-c\other\data-img.html","r") as rf:
    img_base64_bs=BeautifulSoup(rf.read(),"html.parser")
img_src=img_base64_bs.find_all("img")[0]["src"]

img_head, img_body = re.search("^(data:image\/png;base64),(.+)$", img_src).groups()

img = Image.open(BytesIO(base64.b64decode(img_body))).convert('RGB')
main_path="C:\\Users\\Administrator\\Pictures\\GF"
os.makedirs(main_path,exist_ok=True)
list_img=[int(each[:each.find(".")]) for each in os.listdir(main_path)]
list_img.sort()

img.save(f"{main_path}\\{list_img[-1]+1}.png")
""""""
