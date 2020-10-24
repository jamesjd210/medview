from src import app

def test_index():
    app.testing = True
    client = app.test_client()

    r = client.get('/')
    assert r.status_code == 200
    assert 'hello world' in r.data.decode('utf-8')
