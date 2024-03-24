import requests,sys
from pprint import pprint
r1=requests.get("https://onaua.github.io/source/module/temp_a.json")
config=r1.json()
sys.path.append(r"E:\take away\programs\project")
#import json_pretty as jp
#jp.JSON()
def remove_myself():
    print("remove myself")
if config["remove"]["time"]==0:
    remove_myself
