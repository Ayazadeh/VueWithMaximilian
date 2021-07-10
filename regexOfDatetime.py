import re
from datetime import datetime
text="""Neque est adipisci dolor labore numquam temp 1995-01-01 04:42:47 ora etincidunt.
Numquam quaerat dolorem ut sit 1997-11-25 21:10:01 .
Tempora quiquia ipsum numquam quaer 2005-09-06 09:41:28 at.
Sit sit amet amet  1994-08-09 21:11:06 sit quiquia voluptatem adipisci.
Quisquam quaerat tempora ut velit numquam dolo 2006-11-03 03:31:15 r.
Dolor dolorem dolor a 1999-02-20 12:13:08 dipisci.
Amet si 1992-05-28 16:30:26 t quiquia quiquia est labore neque etincidunt.
Sit porro velit dolorem etincidun 1993-04-11 16:21:21 t magnam.
Consectetur ut non non consect 1992-05-24 07:43:16 etur ipsum ut dolorem.
Adipisci dolor temp 1995-02-12 15:55:26 ora quiquia est consectetur quisquam tempora.
Dolore modi etincidunt quaerat d 2009-05-13 10:37:14 olorem.
Amet est ipsu 2001-07-30 22:20:32 m tempora tempora eius.
Dolor porro velit quaerat  2020-09-01 10:54:22 porro modi labore consectetur.
Labore consectetur dolore magnam etin 1992-05-31 10:42:50 cidunt modi velit.
Numquam  1996-01-24 07:11:33 quisquam sed est tempora.
Numqu 2003-04-13 08:41:28 am ipsum porro numquam tempora tempora etincidunt sit.
Am 2003-12-16 07:20:40 et quiquia neque magnam.
Dolor porro etincid 2019-10-04 03:23:32 unt ipsum quaerat neque adipisci.
 2008-02-15 04:52:01 Labore voluptatem quiquia eius velit adipisci.
Consectetur quaerat aliquam velit quaerat la 2001-02-13 20:03:10 bore sed dolorem."""
pattern=r"\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}"
pattern2="%Y-%m-%d %H:%M:%S"
res=re.findall(pattern,text)
date=list()
a=text.split('\n')
for i in range(len(res)):
    date.append((datetime.strptime(res[i], pattern2),a[i]))
date.sort()
for i in date:
    print(i[1])

