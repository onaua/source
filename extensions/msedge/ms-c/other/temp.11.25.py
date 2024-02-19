import time
import datetime

def in_time(v,fortime=True):
        if v=="anytime":
            return True
        if_do=[]
        if fortime:
            #比较精确的时间
            now=time.strftime('%H:%M', time.localtime(time.time()))
            for d_s1,d_s2 in v:
                                d_i11,d_i12=d_s1.split(":")
                                d1 = datetime.datetime(2023, 1, 1, int(d_i11),int(d_i12))
                                d_i21,d_i22=d_s2.split(":")
                                d2 = datetime.datetime(2023, 1, 1, int(d_i21),int(d_i22))
                                d_n1,d_n2=now.split(":")
                                no_s=datetime.datetime(2023, 1, 1, int(d_n1),int(d_n2))
                                if_do.append(d1<no_s and d2>no_s)
        else:
            #仅比较日期
            for d_s1,d_s2 in v:
                if_do.append(datetime.datetime(*d_s1) ==  datetime.datetime(*d_s2))
        return any(if_do)

tasks={
       "11.25|11.26|11.24":{
            "iAmMad":[5],
            "iAmMad_weight":[0],  #to sum equals 1
            "iAmMad_req_n":10
        },
        "11.28|11.29":{
            "iAmMad":[],
            "iAmMad_weight":[],  #to sum equals 1
            "iAmMad_req_n":0
        },
        "12.1|11.30":{
            "iAmMad":[],
            "iAmMad_weight":[],  #to sum equals 1
            "iAmMad_req_n":0
        }
}
iAmMad=[]
iAmMad_weight=[]
iAmMad_req_n=0
this_day=datetime.datetime.today()
for k,v in tasks.items():
    day_d=[]
    for e_ in k.split("|"):
        sday_=e_.split(".")
        day_d.append([[this_day.year,this_day.month,this_day.day],[this_day.year,int(sday_[0]),int(sday_[1])]])
    if (in_time(day_d,False)):
       print(9)
       iAmMad,iAmMad_req_n,iAmMad_weight=v["iAmMad"],v["iAmMad_req_n"],v["iAmMad_weight"]
print(iAmMad,iAmMad_req_n,iAmMad_weight)
    

