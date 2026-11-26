import requests

BASE_URL = "http://localhost:8000"


def test_route(route):
    url = BASE_URL + route

    try:
        response = requests.get(url, timeout=5)

        if response.status_code == 200:
            print(f"PASS: {route} -> Status {response.status_code}")
            print("Response:", response.json())
        else:
            print(f"FAIL: {route} -> Status {response.status_code}")
            raise SystemExit(1)

    except requests.exceptions.RequestException as error:
        print(f"ERROR: {route} -> {error}")
        raise SystemExit(1)


print("Starting automated API testing...\n")
test_route("/")
test_route("/health")
test_route("/students")
print("\nAll API tests completed successfully.")
