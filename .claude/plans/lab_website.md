# Lab website modification plan

## Goal

Currently, the website is a personal website for myself.
Now that I'm starting a new lab, I want to modify the websites to turn it into a lab website.

The new lab is called "Yang Lab".

## Things to change

Below are the things I want to change:

- [ ] The home page should be the introduction to the lab
- [ ] Other sections, such as pubs, news, media, and tools, can stay
- [ ] News: need to change "I" to "Kaicheng"
- [ ] Need to create a standalone page for my personal introduction
- [ ] Move the things from the about page to this personal page
- [ ] The about page should only contain the information about the website
- [ ] Remove the link to "CV" and "About" from the navbar
- [ ] Need a page for the team
- [ ] Add a "Team" link to the navbar
- [ ] The team page should contains the information of the PI and the students

## Detailed Implementation Plan

### 1. Homepage Transformation
**File: `src/components/HomePage.vue`**
- Replace `<Bio />` component with new `<LabIntro />` component
- Update page title and meta content to reflect lab focus
- Maintain existing sections (News, Publications, Media, Tools) but update context

**File: `src/components/lab/LabIntro.vue` (NEW)**
- Create lab introduction component with:
  - Lab name and mission statement
  - Research focus and areas
  - Lab overview and goals
  - Contact information for the lab

### 2. Navigation Updates
**File: `src/components/nav/Navbar.vue`**
- Remove "CV" link (external PDF)
- Remove "About" link (will be website-only info)
- Add "Team" link
- Update navigation order: Home, Publications, News, Media, Tools, Team

**File: `src/router/index.js`**
- Add `/team` route pointing to `TeamPage.vue`
- Add `/kaicheng` route for personal page
- Keep `/about` route but update to website-only content

### 3. Team Page Creation
**File: `src/components/team/TeamPage.vue` (NEW)**
- Main team page layout with PI and students sections
- Load team data from JSON file
- Display team member cards with photos, names, roles, bios

**File: `src/components/team/TeamMember.vue` (NEW)**
- Reusable component for individual team member display
- Props: name, role, bio, photo, email, links
- Responsive card layout

**File: `public/files/team/team.json` (NEW)**
- JSON structure for team data:
  ```json
  {
    "pi": {
      "name": "Kai-Cheng Yang",
      "title": "Principal Investigator",
      "role": "Assistant Professor",
      "affiliation": "Binghamton University",
      "photo": "/photos/avatar_01.png",
      "bio": "...",
      "email": "yang3kc@gmail.com",
      "links": [...]
    },
    "students": [
      {
        "name": "Student Name",
        "role": "Ph.D. Student",
        "year": "1st year",
        "photo": "/photos/student1.jpg",
        "bio": "...",
        "email": "...",
        "research_interests": ["..."]
      }
    ]
  }
  ```

### 4. Personal Page Creation
**File: `src/components/bio/PersonalPage.vue` (NEW)**
- Move existing bio content from AboutPage
- Include personal photo, bio, contact links
- Keep personal CV download link here
- Personal achievements and background

### 5. About Page Restructuring
**File: `src/components/bio/AboutPage.vue`**
- Remove all personal bio content
- Keep only website technical information section
- Remove photo and bio sections
- Focus solely on website credits, tech stack, development info

### 6. News Content Updates
**Files: `public/files/news/*.json`**
- Systematically update all news files
- Change first-person references ("I") to "Kaicheng"
- Examples:
  - "I published..." → "Kaicheng published..."
  - "My paper..." → "Kaicheng's paper..."
  - "I will be..." → "Kaicheng will be..."

### 7. Data Integration
**File: `src/main.js`**
- Add team data loading to existing data loading pattern
- Fetch `/files/team/team.json` and provide globally
- Follow existing pattern used for publications, news, etc.

### 8. Component Directory Structure
```
src/components/
├── lab/
│   └── LabIntro.vue
├── team/
│   ├── TeamPage.vue
│   └── TeamMember.vue
├── bio/
│   ├── AboutPage.vue (modified)
│   ├── PersonalPage.vue (new)
│   └── Bio.vue (existing)
└── ... (other existing components)
```

### 9. Data Directory Structure
```
public/files/
├── team/
│   └── team.json
└── ... (other existing data files)
```

## Implementation Order
1. Update this plan document ✓
2. Create lab introduction component
3. Create team page components and data structure
4. Create personal page for Kaicheng
5. Update About page content
6. Update navigation and routing
7. Update homepage to use lab introduction
8. Update news content systematically
9. Update data loading in main.js
10. Test all functionality

## Testing Checklist
- [ ] Homepage displays lab introduction correctly
- [ ] Navigation works for all new pages
- [ ] Team page displays PI and students properly
- [ ] Personal page contains all bio information
- [ ] About page shows only website information
- [ ] All existing functionality (pubs, news, media, tools) still works
- [ ] News content uses "Kaicheng" instead of "I"
- [ ] Responsive design works on mobile and desktop
- [ ] All links and routes function correctly