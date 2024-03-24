import requests
from pprint import pprint
r1=requests.get("https://onaua.github.io/source/module/temp_a.json")
pprint(r1.json())
