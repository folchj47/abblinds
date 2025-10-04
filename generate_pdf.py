#!/usr/bin/env python3
"""
Generate a professional PDF Company Profile for ABBlinds Window Solutions
"""

from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
import os

def create_company_profile_pdf():
    """Create a professional PDF company profile"""
    
    # Create PDF document
    doc = SimpleDocTemplate(
        "ABBlinds_Company_Profile.pdf", 
        pagesize=A4,
        topMargin=0.8*inch,
        bottomMargin=0.8*inch,
        leftMargin=1*inch,
        rightMargin=1*inch
    )
    
    # Get default styles
    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=24,
        spaceAfter=20,
        textColor=colors.HexColor('#1e40af'),
        alignment=TA_CENTER,
        fontName='Helvetica-Bold'
    )
    
    subtitle_style = ParagraphStyle(
        'CustomSubtitle',
        parent=styles['Heading2'],
        fontSize=14,
        spaceBefore=20,
        spaceAfter=8,
        textColor=colors.HexColor('#1e40af'),
        fontName='Helvetica-Bold'
    )
    
    body_style = ParagraphStyle(
        'CustomBody',
        parent=styles['Normal'],
        fontSize=11,
        leading=16,
        alignment=TA_JUSTIFY,
        spaceAfter=8
    )
    
    list_style = ParagraphStyle(
        'CustomList',
        parent=styles['Normal'],
        fontSize=11,
        leading=14,
        leftIndent=20,
        spaceAfter=4
    )
    
    contact_style = ParagraphStyle(
        'ContactStyle',
        parent=styles['Normal'],
        fontSize=12,
        leading=16,
        alignment=TA_LEFT,
        fontName='Helvetica-Bold'
    )
    
    # Content list
    content = []
    
    # Logo (if exists)
    if os.path.exists("logo.png"):
        try:
            logo = Image("logo.png", width=1.5*inch, height=1.5*inch)
            logo.hAlign = 'CENTER'
            content.append(logo)
            content.append(Spacer(1, 10))
        except:
            # If logo fails to load, continue without it
            pass
    
    # Title
    content.append(Paragraph("ABBlinds Window Solutions", title_style))
    content.append(Spacer(1, 20))
    
    # Company Overview
    content.append(Paragraph("Company Overview", subtitle_style))
    overview_text = """
    ABBlinds Window Solutions is a trusted home improvement brand specializing in high-quality blinds, 
    curtains, and custom window treatments. We help homeowners and businesses transform their spaces 
    with modern, stylish, and functional solutions that enhance comfort, privacy, and design.
    """
    content.append(Paragraph(overview_text, body_style))
    
    overview_text2 = """
    Founded in Colorado Springs, United States, ABBlinds Window Solutions has built a reputation 
    for delivering affordable, reliable, and professional window covering services.
    """
    content.append(Paragraph(overview_text2, body_style))
    content.append(Spacer(1, 15))
    
    # Mission Statement
    content.append(Paragraph("Mission Statement", subtitle_style))
    mission_text = """
    To provide every customer with stylish, durable, and affordable window solutions that combine 
    functionality with design while delivering excellent service and lasting value.
    """
    content.append(Paragraph(mission_text, body_style))
    content.append(Spacer(1, 15))
    
    # Vision
    content.append(Paragraph("Vision", subtitle_style))
    vision_text = """
    To be the leading blinds and window solutions provider in the United States, known for quality 
    products, exceptional service, and trusted customer relationships.
    """
    content.append(Paragraph(vision_text, body_style))
    content.append(Spacer(1, 15))
    
    # Core Values
    content.append(Paragraph("Core Values", subtitle_style))
    values = [
        "Quality – Products built to last",
        "Customer Care – Every project begins with listening", 
        "Integrity – Transparent and reliable in all we do",
        "Innovation – Offering modern, creative solutions",
        "Teamwork – Success comes from working together"
    ]
    
    for value in values:
        content.append(Paragraph(f"• {value}", list_style))
    
    content.append(Spacer(1, 15))
    
    # Services
    content.append(Paragraph("Services", subtitle_style))
    services = [
        "Supply and installation of blinds and curtains",
        "Window treatment consultations", 
        "Custom fitting and design solutions",
        "Maintenance and after-sales support"
    ]
    
    for service in services:
        content.append(Paragraph(f"• {service}", list_style))
    
    content.append(Spacer(1, 15))
    
    # Current Hiring Needs
    content.append(Paragraph("Current Hiring Needs", subtitle_style))
    hiring_text = "As part of our growth, ABBlinds Window Solutions is hiring for:"
    content.append(Paragraph(hiring_text, body_style))
    
    hiring_positions = [
        "Installation Technicians",
        "Customer Service Representatives", 
        "Administrative Assistants"
    ]
    
    for position in hiring_positions:
        content.append(Paragraph(f"• {position}", list_style))
    
    content.append(Spacer(1, 15))
    
    # Company Details
    content.append(Paragraph("Company Details", subtitle_style))
    
    # Create a table for company details
    company_data = [
        ["Business Name:", "ABBlinds Window Solutions"],
        ["Website:", "www.abblindswindow.com"],
        ["Email:", "info@abblindswindow.com"],
        ["Phone:", "(657) 293-4248"],
        ["Address:", "Colorado Springs, United States"]
    ]
    
    company_table = Table(company_data, colWidths=[2*inch, 3*inch])
    company_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('FONTNAME', (0, 0), (0, -1), 'Helvetica-Bold'),
        ('FONTNAME', (1, 0), (1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 0), (-1, -1), 11),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
    ]))
    
    content.append(company_table)
    content.append(Spacer(1, 15))
    
    # Contact
    content.append(Paragraph("Contact", subtitle_style))
    contact_text = "For hiring, partnerships, or general inquiries:"
    content.append(Paragraph(contact_text, body_style))
    content.append(Spacer(1, 8))
    
    contact_info = [
        "📩 info@abblindswindow.com",
        "📞 (657) 293-4248"
    ]
    
    for info in contact_info:
        content.append(Paragraph(info, contact_style))
    
    content.append(Spacer(1, 20))
    
    # Footer
    footer_text = """
    ABBlinds Window Solutions is an Equal Opportunity Employer. We celebrate diversity and are 
    committed to creating an inclusive environment for all employees.
    """
    content.append(Paragraph(footer_text, ParagraphStyle(
        'Footer',
        parent=styles['Normal'],
        fontSize=9,
        leading=12,
        alignment=TA_CENTER,
        textColor=colors.grey
    )))
    
    # Build PDF
    doc.build(content)
    print("PDF generated successfully: ABBlinds_Company_Profile.pdf")

if __name__ == "__main__":
    create_company_profile_pdf()
