import json
import requests

site = 'https://api.neshan.org/v2/reverse'

key = 'service.GDwNbS3U7svILS8SwBIYqpH5PpL3rrq2Fz9v3kK8'

params = {
    'term': 'اکبر',
    'lat': 36.2880443,
    'lng': 59.615743
}
resp = requests.get(search_location_api_url, params=params,
                    headers={'Api-key': api_key})
pprint(resp.json())
