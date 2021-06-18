from psycopg2 import connect
from psycopg2._psycopg import connection, cursor

conn: connection = connect("host=185.239.106.39 dbname=lab user=test password=12345")
print(conn)
cur: cursor = conn.cursor()

query = "insert into test_answer values(24, 1, '2021-2-3', '2021-2-6')"
query = "update test_answer set request_date = '2021-4-25' where id=24"
query = "delete from test_answer where id=24"
cur.execute(query)

conn.commit()
conn.close()