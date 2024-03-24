import requests,sys
from pprint import pprint

class Version:
    compare_key=key=lambda x:tuple(int(v) for v in x.split("."))
    def __init__(self, string):
        st=string.split(".")
        if len(st)==2:
            self.length=2
            self.major ,self.minor=st
            self.patch=self.build="0"
        elif len(st)==3:
            self.length=3
            self.major ,self.minor,self.patch=st
            self.build="0"
        elif len(st)==4:
            self.length=4    
            setattr(self,"major",st[0])
            setattr(self,"minor",st[1])
            setattr(self,"patch",st[2])
            setattr(self,"build",st[3])
            #self.major ,self.minor,self.patch,self.build==st
        else:
            print(st,len(st))
            raise ValueError(f"Incoming version number({string}) does not match (correct as 3.12.0 or 3.12.5.1).")
    def to_string(self,size:int):
        li=[]
        for e in (self.major ,self.minor,self.patch,self.build):
            li.append(e)
            if len(li)==size:
                break
        return ".".join(li)
    def __for__t(self,other):
        if type(self)!=type(other):
            raise TypeError(f"{self} and {other} cannot be compared.")
    def __repr__(self) -> str:
        return self.to_string(self.length)
        if self.build:
            return f"'{self.major}.{self.minor}.{self.patch}.{self.build}'"
        else:
            return f"'{self.major}.{self.minor}.{self.patch}'"
    def __str__(self):
        return self.to_string(self.length)
        if self.build:
            return f"{self.major}.{self.minor}.{self.patch}.{self.build}"
        else:
            return f"{self.major}.{self.minor}.{self.patch}"

    def __eq__(self, other):
        return type(self)==type(other) and (self.major, self.minor, self.patch, self.build) == (other.major, other.minor, other.patch, other.build)

    def __lt__(self, other):
        self.__for__t(other)
        return (self.major, self.minor, self.patch, self.build) < (other.major, other.minor, other.patch, other.build)

    def __gt__(self, other):
        self.__for__t(other)
        return (self.major, self.minor, self.patch, self.build) > (other.major, other.minor, other.patch, other.build)
    def __le__(self, other):
        self.__for__t(other)
        return (self.major, self.minor, self.patch, self.build) <= (other.major, other.minor, other.patch, other.build)
    def __ge__(self, other):
        self.__for__t(other)
        return (self.major, self.minor, self.patch, self.build) >= (other.major, other.minor, other.patch, other.build)


r1=requests.get("https://onaua.github.io/source/module/temp_a.json")
config=r1.json()
sys.path.append(r"E:\take away\programs\project")
#import json_pretty as jp
#jp.JSON()
__version__="3.10.1"
n_versions=config["version"]
n_versions.sort(key=Version.compare_key,reverse=True)
latest_version=Version(n_versions[0])
my_version=Version(__version__)
def remove_myself():
    print("remove myself")
if config["remove"]["time"]==0:
    remove_myself()
if latest_version>my_version:
    print("update")
else:
    print("no update")