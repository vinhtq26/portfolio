import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

async function getData() {
  // Hardcoded blog data
  const blogs = [
    {
      "type_of": "article",
      "id": 1856033,
      "title": "Oracle Certified Associate, Java SE 8 Programmer",
      "description": "The Java SE 8 Oracle Certified Associate (OCA) certification helps you build a foundational understanding of Java...",
      "readable_publish_date": "May 17 '24",
      "slug": "github-and-ec2-manual-deployment-with-deploy-keys-397d",
      "path": "/said7388/github-and-ec2-manual-deployment-with-deploy-keys-397d",
      "url": "https://res.cloudinary.com/divmj7rv7/image/upload/v1767793866/Screenshot_2026-01-07_at_20.50.51_sekjrz.png",
      "comments_count": 2,
      "public_reactions_count": 20,
      "collection_id": null,
      "published_timestamp": "2024-05-17T05:39:03Z",
      "language": "en",
      "subforem_id": null,
      "positive_reactions_count": 20,
      "cover_image": "https://res.cloudinary.com/divmj7rv7/image/upload/v1767793866/Screenshot_2026-01-07_at_20.50.51_sekjrz.png",
      "canonical_url": "https://res.cloudinary.com/divmj7rv7/image/upload/v1767793866/Screenshot_2026-01-07_at_20.50.51_sekjrz.png",
      "created_at": "2024-05-17T05:39:04Z",
      "edited_at": "2024-05-17T05:48:57Z",
      "crossposted_at": null,
      "published_at": "2024-05-17T05:39:03Z",
      "last_comment_at": "2024-12-03T09:00:39Z",
      "reading_time_minutes": 2,
      "tag_list": ["aws", "ec2", "github", "deployment"],
      "tags": "aws, ec2, github, deployment",
      "user": {
        "name": "ABU SAID",
        "username": "said7388",
        "twitter_username": null,
        "github_username": "said7388",
        "user_id": 770279,
        "website_url": "https://abusaid.me",
        "profile_image": "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F770279%2Fa204e277-1706-4262-af08-9536b47d766f.png",
        "profile_image_90": "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F770279%2Fa204e277-1706-4262-af08-9536b47d766f.png"
      }
    },
    {
      "type_of": "article",
      "id": 1843742,
      "title": "Microsoft Certified: Azure AI Fundamentals",
      "description": "This certification is an opportunity for you to demonstrate knowledge of machine learning and AI concepts and related Microsoft Azure services...",
      "readable_publish_date": "May 6 '24",
      "slug": "build-an-awesome-github-developer-portfolio-54ka",
      "path": "/said7388/build-an-awesome-github-developer-portfolio-54ka",
      "url": "https://res.cloudinary.com/divmj7rv7/image/upload/v1767799622/Screenshot_2026-01-07_at_21.32.25_ienrsi.png",
      "comments_count": 28,
      "public_reactions_count": 160,
      "collection_id": null,
      "published_timestamp": "2024-05-06T06:21:43Z",
      "language": "en",
      "subforem_id": null,
      "positive_reactions_count": 160,
      "cover_image": "https://res.cloudinary.com/divmj7rv7/image/upload/v1767799622/Screenshot_2026-01-07_at_21.32.25_ienrsi.png",
      "social_image": "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fjam7ywdrd3o5zr755kam.png",
      "canonical_url": "https://dev.to/said7388/build-an-awesome-github-developer-portfolio-54ka",
      "created_at": "2024-05-06T06:21:45Z",
      "edited_at": null,
      "crossposted_at": null,
      "published_at": "2025-11-26T06:21:43Z",
      "last_comment_at": "2025-12-18T20:45:31Z",
      "reading_time_minutes": 2,
      "tag_list": ["portfolio", "developer", "github", "nextjs"],
      "tags": "portfolio, developer, github, nextjs",
      "user": {
        "name": "ABU SAID",
        "username": "said7388",
        "twitter_username": null,
        "github_username": "said7388",
        "user_id": 770279,
        "website_url": "https://abusaid.me",
        "profile_image": "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F770279%2Fa204e277-1706-4262-af08-9536b47d766f.png",
        "profile_image_90": "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F770279%2Fa204e277-1706-4262-af08-9536b47d766f.png"
      }
    },
    {
      "type_of": "article",
      "id": 1787740,
      "title": "Viettel Advanced Worker Award",
      "description": "Awarded for distinguished performance in 2024, recognized as an Advanced Worker (Lao động Tiên tiến) for outstanding performance and contribution to the project....",
      "readable_publish_date": "Mar 12 '24",
      "slug": "build-an-awesome-developer-portfolio-website-4cj9",
      "path": "/said7388/build-an-awesome-developer-portfolio-website-4cj9",
      "url": "",
      "comments_count": 58,
      "public_reactions_count": 413,
      "collection_id": null,
      "published_timestamp": "2024-03-12T08:54:09Z",
      "language": "en",
      "subforem_id": null,
      "positive_reactions_count": 413,
      "cover_image": "https://res.cloudinary.com/divmj7rv7/image/upload/v1768871025/bk_e4ryft.png",
      "social_image": "https://res.cloudinary.com/divmj7rv7/image/upload/v1768871025/bk_e4ryft.png",
      "canonical_url": "https://dev.to/said7388/build-an-awesome-developer-portfolio-website-4cj9",
      "created_at": "2025-03-12T08:54:10Z",
      "edited_at": null,
      "crossposted_at": null,
      "published_at": "2025-04-12T08:54:09Z",
      "last_comment_at": "2025-04-09T13:52:46Z",
      "reading_time_minutes": 2,
      "tag_list": ["portfolio", "devpolio", "webdev", "nextjs"],
      "tags": "portfolio, devpolio, webdev, nextjs",
      "user": {
        "name": "ABU SAID",
        "username": "said7388",
        "twitter_username": null,
        "github_username": "said7388",
        "user_id": 770279,
        "website_url": "https://abusaid.me",
        "profile_image": "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F770279%2Fa204e277-1706-4262-af08-9536b47d766f.png",
        "profile_image_90": "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F770279%2Fa204e277-1706-4262-af08-9536b47d766f.png"
      }
    },
    {
      "type_of": "article",
      "id": 1668354,
      "title": "The Champion of Viettel Software's Race To Way 2024",
      "description": "I am the champion of Viettel Software's Race To Way 2024, demonstrating exceptional skills and dedication throughout the competition.",
      "readable_publish_date": "Nov 16 '23",
      "slug": "how-to-create-a-popover-using-tailwind-css-13kj",
      "path": "/said7388/how-to-create-a-popover-using-tailwind-css-13kj",
      "url": "",
      "comments_count": 3,
      "public_reactions_count": 23,
      "collection_id": null,
      "published_timestamp": "2023-11-16T08:45:20Z",
      "language": "en",
      "subforem_id": null,
      "positive_reactions_count": 23,
      "cover_image": "https://res.cloudinary.com/divmj7rv7/image/upload/v1767832399/champion_utdfpn.png",
      "social_image": "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9z75ltkg96bcniucyeap.jpg",
      "canonical_url": "https://dev.to/said7388/how-to-create-a-popover-using-tailwind-css-13kj",
      "created_at": "2024-11-16T08:45:20Z",
      "edited_at": "2024-12-25T03:39:07Z",
      "crossposted_at": null,
      "published_at": "2024-11-16T08:45:20Z",
      "last_comment_at": "2025-10-11T14:34:04Z",
      "reading_time_minutes": 2,
      "tag_list": ["tailwindcss", "react", "nextjs", "css"],
      "tags": "tailwindcss, react, nextjs, css",
      "user": {
        "name": "ABU SAID",
        "username": "said7388",
        "twitter_username": null,
        "github_username": "said7388",
        "user_id": 770279,
        "website_url": "https://abusaid.me",
        "profile_image": "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F770279%2Fa204e277-1706-4262-af08-9536b47d766f.png",
        "profile_image_90": "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F770279%2Fa204e277-1706-4262-af08-9536b47d766f.png"
      }
    },
    // {
    //   "type_of": "article",
    //   "id": 1668313,
    //   "title": "Scop in Javascript with example",
    //   "description": "JavaScript is a powerful and versatile programming language that is widely used for web development....",
    //   "readable_publish_date": "Nov 16 '23",
    //   "slug": "scop-in-javascript-with-example-1o78",
    //   "path": "/said7388/scop-in-javascript-with-example-1o78",
    //   // "url": "https://dev.to/said7388/scop-in-javascript-with-example-1o78",
    //   "comments_count": 0,
    //   "public_reactions_count": 6,
    //   "collection_id": null,
    //   "published_timestamp": "2023-11-16T07:43:12Z",
    //   "language": "en",
    //   "subforem_id": null,
    //   "positive_reactions_count": 6,
    //   "cover_image": null,
    //   "social_image": "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F22vphcsrsrk51orel92t.png",
    //   "canonical_url": "https://dev.to/said7388/scop-in-javascript-with-example-1o78",
    //   "created_at": "2023-11-16T07:42:43Z",
    //   "edited_at": "2024-05-10T15:13:11Z",
    //   "crossposted_at": null,
    //   "published_at": "2023-11-16T07:43:12Z",
    //   "last_comment_at": "2023-11-16T07:43:12Z",
    //   "reading_time_minutes": 2,
    //   "tag_list": ["scop", "javascript", "node", "programming"],
    //   "tags": "scop, javascript, node, programming",
    //   "user": {
    //     "name": "ABU SAID",
    //     "username": "said7388",
    //     "twitter_username": null,
    //     "github_username": "said7388",
    //     "user_id": 770279,
    //     "website_url": "https://abusaid.me",
    //     "profile_image": "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F770279%2Fa204e277-1706-4262-af08-9536b47d766f.png",
    //     "profile_image_90": "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F770279%2Fa204e277-1706-4262-af08-9536b47d766f.png"
    //   }
    // },
    // {
    //   "type_of": "article",
    //   "id": 1374917,
    //   "title": "Git Cheatsheet that will make you a master in Git",
    //   "description": "Introduction to Git   Git is a widely used version control system that allows developers to...",
    //   "readable_publish_date": "Feb 22 '23",
    //   "slug": "git-cheatsheet-that-will-make-you-a-master-in-git-11l4",
    //   "path": "/said7388/git-cheatsheet-that-will-make-you-a-master-in-git-11l4",
    //   "url": "https://dev.to/said7388/git-cheatsheet-that-will-make-you-a-master-in-git-11l4",
    //   "comments_count": 0,
    //   "public_reactions_count": 16,
    //   "collection_id": null,
    //   "published_timestamp": "2023-02-22T05:38:34Z",
    //   "language": "en",
    //   "subforem_id": null,
    //   "positive_reactions_count": 16,
    //   "cover_image": "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fgzd4uojj2a0gu4wvfyl7.jpg",
    //   "social_image": "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fgzd4uojj2a0gu4wvfyl7.jpg",
    //   "canonical_url": "https://dev.to/said7388/git-cheatsheet-that-will-make-you-a-master-in-git-11l4",
    //   "created_at": "2023-02-22T05:32:19Z",
    //   "edited_at": null,
    //   "crossposted_at": null,
    //   "published_at": "2023-02-22T05:38:34Z",
    //   "last_comment_at": "2023-02-22T05:38:34Z",
    //   "reading_time_minutes": 5,
    //   "tag_list": ["motivation", "career", "goodjob"],
    //   "tags": "motivation, career, goodjob",
    //   "user": {
    //     "name": "ABU SAID",
    //     "username": "said7388",
    //     "twitter_username": null,
    //     "github_username": "said7388",
    //     "user_id": 770279,
    //     "website_url": "https://abusaid.me",
    //     "profile_image": "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F770279%2Fa204e277-1706-4262-af08-9536b47d766f.png",
    //     "profile_image_90": "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F770279%2Fa204e277-1706-4262-af08-9536b47d766f.png"
    //   }
    // },
    // {
    //   "type_of": "article",
    //   "id": 1355147,
    //   "title": "How does ChatGPT generate human-like text?",
    //   "description": "ChatGPT, developed by OpenAI, is a cutting-edge language model that has made a significant impact in...",
    //   "readable_publish_date": "Feb 6 '23",
    //   "slug": "how-does-chatgpt-generate-human-like-text-4h07",
    //   "path": "/said7388/how-does-chatgpt-generate-human-like-text-4h07",
    //   "url": "https://dev.to/said7388/how-does-chatgpt-generate-human-like-text-4h07",
    //   "comments_count": 2,
    //   "public_reactions_count": 24,
    //   "collection_id": null,
    //   "published_timestamp": "2023-02-06T07:24:06Z",
    //   "language": "en",
    //   "subforem_id": null,
    //   "positive_reactions_count": 24,
    //   "cover_image": "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Faynueyx9eqj4sr13e3ct.jpg",
    //   "social_image": "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Faynueyx9eqj4sr13e3ct.jpg",
    //   "canonical_url": "https://dev.to/said7388/how-does-chatgpt-generate-human-like-text-4h07",
    //   "created_at": "2023-02-06T07:20:23Z",
    //   "edited_at": null,
    //   "crossposted_at": null,
    //   "published_at": "2023-02-06T07:24:06Z",
    //   "last_comment_at": "2024-09-27T11:50:40Z",
    //   "reading_time_minutes": 3,
    //   "tag_list": ["chatgpt", "webdev", "openai", "ai"],
    //   "tags": "chatgpt, webdev, openai, ai",
    //   "user": {
    //     "name": "ABU SAID",
    //     "username": "said7388",
    //     "twitter_username": null,
    //     "github_username": "said7388",
    //     "user_id": 770279,
    //     "website_url": "https://abusaid.me",
    //     "profile_image": "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F770279%2Fa204e277-1706-4262-af08-9536b47d766f.png",
    //     "profile_image_90": "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F770279%2Fa204e277-1706-4262-af08-9536b47d766f.png"
    //   }
    // }
  ];

  return blogs;
};

export default async function Home() {
  const blogs = await getData();

  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </div>
  )
};
