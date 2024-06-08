import requests
import os

# Define the number of images and the category
number_of_images = 10
category = 'waifu'  # You can use other categories like 'neko', 'shinobu', etc.

# Create a directory to save images if it doesn't exist
os.makedirs('waifu_images', exist_ok=True)

# Fetch images from the Waifu API
for i in range(number_of_images):
    response = requests.get(f'https://api.waifu.pics/sfw/{category}')
    if response.status_code == 200:
        image_url = response.json()['url']
        image_data = requests.get(image_url).content
        with open(f'waifu_images/waifu_{i+1}.jpg', 'wb') as handler:
            handler.write(image_data)
    else:
        print(f"Failed to fetch image {i+1}")

print("Images fetched successfully.")
