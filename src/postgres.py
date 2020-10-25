import pandas
import psycopg2

class PostgresConnection:
    def __init__(self, host, db, user, password, port=5432):
        self.host : str = host
        self.port : int = port
        self.db : str = db
        self.user : str = user
        attributes : str = "host=" + self.host + \
            " port=" + str(self.port) + \
            " dbname=" + self.db + \
            " user=" + self.user + \
            " password=" + password

        self.connection = psycopg2.connect(attributes)
        self.cursor = self.connection.cursor()

    def __del__(self):
        self.cursor.close()
        self.connection.close()

    def execute(self, query):
        data = pandas.read_sql(query, self.connection)
        return data

