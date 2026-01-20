// @flow strict

import BlogCard from "../components/homepage/blog/blog-card";

async function getBlogs() {
  // Hardcoded blog data
  const blogs = [
    {
      "type_of": "article",
      "id": 1856033,
      "title": "GitHub and EC2 manual deployment with Deploy keys",
      "description": "For those looking to quickly deploy a project, whether it's a prototype or a solo endeavor, manual...",
      "readable_publish_date": "May 17 '24",
      "slug": "github-and-ec2-manual-deployment-with-deploy-keys-397d",
      "path": "/said7388/github-and-ec2-manual-deployment-with-deploy-keys-397d",
      "url": "https://dev.to/said7388/github-and-ec2-manual-deployment-with-deploy-keys-397d",
      "comments_count": 2,
      "public_reactions_count": 20,
      "collection_id": null,
      "published_timestamp": "2024-05-17T05:39:03Z",
      "language": "en",
      "subforem_id": null,
      "positive_reactions_count": 20,
      "cover_image": "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fmv441cy8r4os5mhsufl9.jpeg",
      "social_image": "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fmv441cy8r4os5mhsufl9.jpeg",
      "canonical_url": "https://dev.to/said7388/github-and-ec2-manual-deployment-with-deploy-keys-397d",
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
      "title": "Build an awesome GitHub developer portfolio.",
      "description": "In the software development world, it's crucial to effectively present your work alongside the code...",
      "readable_publish_date": "May 6 '24",
      "slug": "build-an-awesome-github-developer-portfolio-54ka",
      "path": "/said7388/build-an-awesome-github-developer-portfolio-54ka",
      "url": "https://dev.to/said7388/build-an-awesome-github-developer-portfolio-54ka",
      "comments_count": 28,
      "public_reactions_count": 160,
      "collection_id": null,
      "published_timestamp": "2024-05-06T06:21:43Z",
      "language": "en",
      "subforem_id": null,
      "positive_reactions_count": 160,
      "cover_image": "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fjam7ywdrd3o5zr755kam.png",
      "social_image": "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fjam7ywdrd3o5zr755kam.png",
      "canonical_url": "https://dev.to/said7388/build-an-awesome-github-developer-portfolio-54ka",
      "created_at": "2024-05-06T06:21:45Z",
      "edited_at": null,
      "crossposted_at": null,
      "published_at": "2024-05-06T06:21:43Z",
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
      "title": "Build an awesome developer portfolio website.",
      "description": "As a software developer, it's important to have a robust portfolio website that can display our...",
      "readable_publish_date": "Mar 12 '24",
      "slug": "build-an-awesome-developer-portfolio-website-4cj9",
      "path": "/said7388/build-an-awesome-developer-portfolio-website-4cj9",
      "url": "https://dev.to/said7388/build-an-awesome-developer-portfolio-website-4cj9",
      "comments_count": 58,
      "public_reactions_count": 413,
      "collection_id": null,
      "published_timestamp": "2024-03-12T08:54:09Z",
      "language": "en",
      "subforem_id": null,
      "positive_reactions_count": 413,
      "cover_image": "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Frlm4gkzg0s19msbr4mat.png",
      "social_image": "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Frlm4gkzg0s19msbr4mat.png",
      "canonical_url": "https://dev.to/said7388/build-an-awesome-developer-portfolio-website-4cj9",
      "created_at": "2024-03-12T08:54:10Z",
      "edited_at": null,
      "crossposted_at": null,
      "published_at": "2024-03-12T08:54:09Z",
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
      "title": "How to create a Popover using React and Tailwind CSS",
      "description": "Popover is a common UI element in web applications, providing a way to display additional information...",
      "readable_publish_date": "Nov 16 '23",
      "slug": "how-to-create-a-popover-using-tailwind-css-13kj",
      "path": "/said7388/how-to-create-a-popover-using-tailwind-css-13kj",
      "url": "https://dev.to/said7388/how-to-create-a-popover-using-tailwind-css-13kj",
      "comments_count": 3,
      "public_reactions_count": 23,
      "collection_id": null,
      "published_timestamp": "2023-11-16T08:45:20Z",
      "language": "en",
      "subforem_id": null,
      "positive_reactions_count": 23,
      "cover_image": "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9z75ltkg96bcniucyeap.jpg",
      "social_image": "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9z75ltkg96bcniucyeap.jpg",
      "canonical_url": "https://dev.to/said7388/how-to-create-a-popover-using-tailwind-css-13kj",
      "created_at": "2023-11-16T08:45:20Z",
      "edited_at": "2024-06-25T03:39:07Z",
      "crossposted_at": null,
      "published_at": "2023-11-16T08:45:20Z",
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
    {
      "type_of": "article",
      "id": 1668313,
      "title": "Scop in Javascript with example",
      "description": "JavaScript is a powerful and versatile programming language that is widely used for web development....",
      "readable_publish_date": "Nov 16 '23",
      "slug": "scop-in-javascript-with-example-1o78",
      "path": "/said7388/scop-in-javascript-with-example-1o78",
      "url": "https://dev.to/said7388/scop-in-javascript-with-example-1o78",
      "comments_count": 0,
      "public_reactions_count": 6,
      "collection_id": null,
      "published_timestamp": "2023-11-16T07:43:12Z",
      "language": "en",
      "subforem_id": null,
      "positive_reactions_count": 6,
      "cover_image": null,
      "social_image": "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F22vphcsrsrk51orel92t.png",
      "canonical_url": "https://dev.to/said7388/scop-in-javascript-with-example-1o78",
      "created_at": "2023-11-16T07:42:43Z",
      "edited_at": "2024-05-10T15:13:11Z",
      "crossposted_at": null,
      "published_at": "2023-11-16T07:43:12Z",
      "last_comment_at": "2023-11-16T07:43:12Z",
      "reading_time_minutes": 2,
      "tag_list": ["scop", "javascript", "node", "programming"],
      "tags": "scop, javascript, node, programming",
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
      "id": 1374917,
      "title": "Git Cheatsheet that will make you a master in Git",
      "description": "Introduction to Git   Git is a widely used version control system that allows developers to...",
      "readable_publish_date": "Feb 22 '23",
      "slug": "git-cheatsheet-that-will-make-you-a-master-in-git-11l4",
      "path": "/said7388/git-cheatsheet-that-will-make-you-a-master-in-git-11l4",
      "url": "https://dev.to/said7388/git-cheatsheet-that-will-make-you-a-master-in-git-11l4",
      "comments_count": 0,
      "public_reactions_count": 16,
      "collection_id": null,
      "published_timestamp": "2023-02-22T05:38:34Z",
      "language": "en",
      "subforem_id": null,
      "positive_reactions_count": 16,
      "cover_image": "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fgzd4uojj2a0gu4wvfyl7.jpg",
      "social_image": "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fgzd4uojj2a0gu4wvfyl7.jpg",
      "canonical_url": "https://dev.to/said7388/git-cheatsheet-that-will-make-you-a-master-in-git-11l4",
      "created_at": "2023-02-22T05:32:19Z",
      "edited_at": null,
      "crossposted_at": null,
      "published_at": "2023-02-22T05:38:34Z",
      "last_comment_at": "2023-02-22T05:38:34Z",
      "reading_time_minutes": 5,
      "tag_list": ["motivation", "career", "goodjob"],
      "tags": "motivation, career, goodjob",
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
      "id": 1355147,
      "title": "How does ChatGPT generate human-like text?",
      "description": "ChatGPT, developed by OpenAI, is a cutting-edge language model that has made a significant impact in...",
      "readable_publish_date": "Feb 6 '23",
      "slug": "how-does-chatgpt-generate-human-like-text-4h07",
      "path": "/said7388/how-does-chatgpt-generate-human-like-text-4h07",
      "url": "https://dev.to/said7388/how-does-chatgpt-generate-human-like-text-4h07",
      "comments_count": 2,
      "public_reactions_count": 24,
      "collection_id": null,
      "published_timestamp": "2023-02-06T07:24:06Z",
      "language": "en",
      "subforem_id": null,
      "positive_reactions_count": 24,
      "cover_image": "https://res.cloudinary.com/divmj7rv7/image/upload/v1768871025/bk_e4ryft.png",
      "social_image": "https://res.cloudinary.com/divmj7rv7/image/upload/v1768871025/bk_e4ryft.png",
      "canonical_url": "https://dev.to/said7388/how-does-chatgpt-generate-human-like-text-4h07",
      "created_at": "2023-02-06T07:20:23Z",
      "edited_at": null,
      "crossposted_at": null,
      "published_at": "2023-02-06T07:24:06Z",
      "last_comment_at": "2024-09-27T11:50:40Z",
      "reading_time_minutes": 3,
      "tag_list": ["chatgpt", "webdev", "openai", "ai"],
      "tags": "chatgpt, webdev, openai, ai",
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
    }
  ];

  return blogs;
};

async function page() {
  const blogs = await getBlogs();

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            Certificate & Reward          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          blogs.map((blog, i) => (
            blog?.cover_image &&
            <BlogCard blog={blog} key={i} />
          ))
        }
      </div>
    </div>
  );
};

export default page;
