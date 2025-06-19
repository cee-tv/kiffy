import uuid
from datetime import datetime
import os

# Make sure the keys directory exists
os.makedirs("keys", exist_ok=True)

# Generate a random UUID key
key = uuid.uuid4()
date_str = datetime.utcnow().strftime('%Y-%m-%d')

# Save the key to a file named by the date
with open(f"keys/{date_str}.txt", "w") as f:
    f.write(str(key))

print(f"Generated key for {date_str}: {key}")
