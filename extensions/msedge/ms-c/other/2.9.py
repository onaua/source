from mymodule.mymail import zmailyyds
gm=zmailyyds.GetMail(quick=("126",1),path="d:\\mail_reception",log="C:\\WINDOWS\\Temp\\log.txt")
gm.get_all()