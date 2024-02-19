import time,datetime
onclass=(("07:15","07:50"),("07:56","08:45"),("08:51","09:40"),("10:01","10:50"),("11:01","11:50"),
                 ("14:06","14:55"),("15:06","15:55"),("16:01","16:50"),
                 ("18:30","19:20"),("19:30","20:20"),("20:30","21:10"),)
import random
random.choice
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
p={6:6,3:3,60:True}
print(f"{p=}")