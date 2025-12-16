from PIL import Image, ImageDraw, ImageOps
import sys

def process_logo(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        
        # Create a circular mask
        size = img.size
        mask = Image.new('L', size, 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0) + size, fill=255)
        
        # Apply mask
        output = ImageOps.fit(img, mask.size, centering=(0.5, 0.5))
        output.putalpha(mask)
        
        output.save(output_path)
        print("Success")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    process_logo("d:/wilton/logo_source.jpg", "d:/wilton/public/images/logo.png")
