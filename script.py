import requests

url = "https://forms.office.com/Pages/AnalysisPage.aspx?AnalyzerToken=HnvbRKs8FFvLeHs9kIVbCxwPhsL4JUSc&id=qpGH3e3XlkGdt2P9e5hDHtQZPUWMXLpLgBgVyvAFL0lUQllSWktXQ0paSjI3VzlIR0ZCWkRUMzM3RS4u"

response = requests.get(url)

if response.status_code == 200:
    file_path = "downloaded_file.csv"

    # Save the content to the specified file
    with open(file_path, "w", encoding="utf-8") as file:
        file.write(response.text)

    print(f"CSV file successfully downloaded and saved to {file_path}")
else:
    print(f"Failed to retrieve the CSV file. Status code: {response.status_code}")
