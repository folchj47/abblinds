#!/usr/bin/env python3
"""
Create a PNG logo for ABBlinds from the SVG description
"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_abblinds_logo():
    """Create ABBlinds logo as PNG"""
    
    # Create image with dark blue background
    width, height = 400, 400
    img = Image.new('RGB', (width, height), color='#1e40af')
    draw = ImageDraw.Draw(img)
    
    # Draw window blinds icon
    # Window frame
    frame_x, frame_y = 80, 80
    frame_width, frame_height = 80, 120
    draw.rectangle([frame_x, frame_y, frame_x + frame_width, frame_y + frame_height], 
                   outline='white', width=3)
    
    # Blinds slats (angled downward)
    slat_spacing = 15
    for i in range(4):
        y_start = frame_y + 20 + (i * slat_spacing)
        x_offset = i * 2  # Slight angle
        draw.line([frame_x + 10 + x_offset, y_start, 
                  frame_x + frame_width - 10 + x_offset, y_start], 
                 fill='white', width=2)
    
    # Bottom rail
    rail_y = frame_y + frame_height - 20
    draw.rectangle([frame_x + 10, rail_y, frame_x + frame_width - 10, rail_y + 15], 
                   fill='white')
    
    # Company name text
    try:
        # Try to use a system font
        font = ImageFont.truetype("arial.ttf", 36)
    except:
        try:
            font = ImageFont.truetype("/System/Library/Fonts/Arial.ttf", 36)
        except:
            font = ImageFont.load_default()
    
    text = "ABBBlinds"
    # Get text size for centering
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    text_x = (width - text_width) // 2
    text_y = 250
    
    draw.text((text_x, text_y), text, fill='white', font=font)
    
    # Save the image
    img.save('logo.png', 'PNG')
    print("Logo created: logo.png")

if __name__ == "__main__":
    create_abblinds_logo()
