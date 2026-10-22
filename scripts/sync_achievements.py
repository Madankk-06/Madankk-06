import os
import re
import urllib.request

USER = "Madankk-06"
URL = f"https://github.com/{USER}?tab=achievements"

ACHIEVEMENT_SLUGS = {
    "Quickdraw": "quickdraw",
    "YOLO": "yolo",
    "Pull Shark": "pull-shark",
    "Pair Extraordinaire": "pair-extraordinaire",
    "Starstruck": "starstruck",
    "Galaxy Brain": "galaxy-brain",
    "Public Sponsor": "public-sponsor",
    "Heart On Your Sleeve": "heart-on-your-sleeve",
    "Open Sourcerer": "open-sourcerer",
}

def main():
    print(f"Fetching achievements for {USER}...")
    req = urllib.request.Request(URL, headers={"User-Agent": "Mozilla/5.0"})
    try:
        html = urllib.request.urlopen(req, timeout=15).read().decode("utf-8")
    except Exception as e:
        print(f"Failed to fetch achievements: {e}")
        return

    detected = sorted(set(re.findall(r'alt="Achievement: ([^"]+)"', html)))
    print(f"Live achievements detected: {detected}")

    if not detected:
        print("No achievements detected or page structure changed.")
        return

    # Ensure asset files exist for detected achievements
    assets_dir = os.path.join(os.path.dirname(__file__), "..", "assets", "achievements")
    os.makedirs(assets_dir, exist_ok=True)

    badge_imgs = []
    for ach in detected:
        slug = ACHIEVEMENT_SLUGS.get(ach, ach.lower().replace(" ", "-"))
        filename = f"{slug}.png"
        filepath = os.path.join(assets_dir, filename)

        if not os.path.exists(filepath):
            img_url = f"https://raw.githubusercontent.com/Schweinepriester/github-profile-achievements/main/images/{slug}-default.png"
            try:
                print(f"Downloading asset for {ach} from {img_url}...")
                img_data = urllib.request.urlopen(img_url, timeout=15).read()
                with open(filepath, "wb") as f:
                    f.write(img_data)
            except Exception as e:
                print(f"Warning: could not download asset for {ach}: {e}")

        badge_imgs.append(
            f'  <img src="assets/achievements/{filename}" width="80" alt="{ach}" title="{ach}"/>'
        )

    badges_html = (
        '## 🎖️ GitHub Achievement Badges\n\n'
        '<div align="center">\n'
        f'<a href="https://github.com/{USER}?tab=achievements">\n'
        + "\n".join(badge_imgs)
        + '\n</a>\n</div>'
    )

    readme_path = os.path.join(os.path.dirname(__file__), "..", "README.md")
    with open(readme_path, "r", encoding="utf-8") as f:
        content = f.read()

    pattern = r"## 🎖️ GitHub Achievement Badges[\s\S]*?(?=\n---|\n## 🌐 Connect With Me)"
    if not re.search(pattern, content):
        print("Achievement section pattern not found in README.md")
        return

    new_content = re.sub(pattern, badges_html, content, count=1)

    if new_content != content:
        with open(readme_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print("README.md updated with live achievements!")
    else:
        print("README.md is already up-to-date with live achievements.")

if __name__ == "__main__":
    main()
