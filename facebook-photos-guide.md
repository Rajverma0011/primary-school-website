# 📸 Guide: Adding Real School Photos from Facebook

## Overview
Your website currently uses high-quality placeholder images that represent the type of content suitable for a school website. To make it authentic, you'll need to replace these with actual photos from your Facebook page.

## Facebook Page Reference
**Your School's Facebook Page**: https://m.facebook.com/profile.php?id=100064106820772

## Steps to Add Real Photos:

### 1. Download Photos from Facebook
1. Visit your Facebook page
2. Go to the Photos section
3. Download high-resolution versions of:
   - School building exterior
   - Classrooms and smart boards
   - Science laboratory
   - Computer lab
   - Students in activities
   - Sports ground/playground
   - Cultural events
   - Award ceremonies
   - Independence Day celebrations
   - Staff photos

### 2. Optimize Images
- **Format**: Use WebP or JPEG format
- **Size**: Optimize for web (800-1200px width)
- **Quality**: 80-90% compression for good balance

### 3. Upload to Your Project
Place images in the `public/images/` folder with descriptive names:
```
public/images/
├── school-building-exterior.jpg
├── smart-classroom-1.jpg
├── science-lab.jpg
├── computer-lab.jpg
├── sports-ground.jpg
├── independence-day-2024.jpg
├── cultural-event.jpg
├── principal-km-shukla.jpg
└── staff-group-photo.jpg
```

### 4. Update Image References

#### Homepage Hero Background:
File: `src/components/home/Hero.jsx`
```jsx
// Replace line 8:
backgroundImage: `url(/images/school-building-exterior.jpg)`
```

#### Gallery Images:
File: `src/pages/Gallery.jsx`
Replace the `src` values in the `schoolPhotos` array:
```jsx
{
  id: 1,
  src: "/images/school-building-exterior.jpg",
  alt: "School Building Exterior",
  caption: "R.K. Public School Main Building - Sikandarpur, Basti"
}
```

#### About Page Gallery:
File: `src/pages/About.jsx`
Update the `aboutGalleryImages` array with real photo paths.

#### Staff Directory:
File: `src/components/about/StaffDirectory/StaffDirectory.jsx`
Replace placeholder staff photos:
```jsx
photo: "/images/principal-km-shukla.jpg"
```

### 5. Recommended Photo Categories:

#### **Campus & Infrastructure** (8-10 photos):
- Main school building
- Entrance gate
- Classrooms with students
- Science laboratory
- Computer lab
- Library area
- Principal's office
- School playground

#### **Events & Activities** (6-8 photos):
- Independence Day celebration
- Annual day function
- Sports day events
- Prize distribution
- Cultural programs
- Science exhibition
- Parent-teacher meetings

#### **Academic Life** (4-6 photos):
- Students in classroom
- Teachers teaching
- Smart board usage
- Laboratory experiments
- Group study sessions

#### **Staff Photos** (4-5 photos):
- Principal K.M. Shukla
- Vice Principal Mrs. Nandita Singh
- Academic Coordinator Mr. Rahul Verma
- Primary Section Head Mrs. Meena Yadav
- Group staff photo

### 6. Image Guidelines:
- **Resolution**: Minimum 800px width
- **Quality**: Clear, well-lit photos
- **Content**: Show school in best light
- **Privacy**: Ensure student faces are either clearly visible with permission or appropriately blurred
- **Consistency**: Maintain similar lighting and color tone across photos

### 7. SEO Benefits:
- Use descriptive file names (school-building-basti.jpg vs image1.jpg)
- Add proper alt tags describing the image content
- Include location keywords when relevant

### 8. Future Updates:
- Create a regular schedule to update gallery with new events
- Add seasonal photos (festivals, sports day, annual day)
- Include achievement photos (awards, certifications)

## Technical Notes:
- All image paths are relative to the `public` folder
- The gallery component supports lightbox view for detailed viewing
- Images are automatically optimized for different screen sizes
- Mobile-friendly gallery with touch navigation

## Contact for Help:
If you need assistance with image optimization or uploading, the technical setup is ready - you just need to replace the placeholder URLs with your actual image paths.

---

**Next Steps**: Start by downloading 4-5 key photos from Facebook and replace the most important ones first (hero background, main building, principal photo).
