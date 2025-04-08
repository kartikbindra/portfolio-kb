---
title: "LeetCode EXPOSED : How It REALLY Works Behind the Scenes! 🔥"
seoTitle: "LeetCode EXPOSED : How It REALLY Works Behind the Scenes! 🔥"
seoDescription: "Discover the secrets behind LeetCode's architecture and code evaluation process, revealing how it ensures speed, scalability, and security"
datePublished: Tue Apr 08 2025 21:21:59 GMT+0000 (Coordinated Universal Time)
cuid: cm990a4v3000309ieepup6cor
slug: leetcode-exposed-how-it-really-works-behind-the-scenes
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1744147210604/1fb4dca5-0326-43a6-9349-26d341aecb63.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1744147150297/2fef5d80-4606-4c6b-9268-77015f6453a0.png
tags: postman, microservices, docker, architecture, coding, scalability, software-engineering, system-design, hackerrank, leetcode, codeforces, rapidapi, high-level-design, code-execution

---

# Introduction

**It all started with a LeetCode Hard daily challenge.**  
While discussing it with a friend (and barely getting the solution accepted — phew!), a thought struck me:  
**How do platforms like LeetCode, Codeforces, and HackerRank evaluate our code submissions with such blazing speed and precision?**

As an innovative web developer, that question hooked me. Curiosity took over, and I dove deep into the world behind the “Submit” button. After long sessions of research & thinking, I tried to reverse-engineer the architecture of LeetCode and here I am dumping everything I learned in the past week about the secrets of Code Evaluation Platforms.

**Today, we’re diving into the core of it all:**  
How do these platforms actually work behind the scenes?  
What makes them scalable, secure, and lightning-fast even when thousands of users are submitting code every minute?

Let’s break it all down and uncover the system architecture powering the coding giants.

# Microservices Architecture (vs Monolithic Architecture)

Lets start by understanding the basics and get them out of our way. Generally, most of the websites/ web apps have two types of architectures namely **Monolithic** and **Microservices** architecture. Let us understand them one by one.

A **Monolithic Application Architecture** is a rather simple architecture and can be seen as a **single unified unit** that is self-contained and can work independently. It is a singular, large computing network with a single code base that includes all the concerns, actions and logics that the web app/ website will ever need. Imagine a “monolith” like a big, all-in-one restaurant kitchen where everything happens, from cooking, baking, chopping, dishwashing… everything!

On the other hand, **Microservices Architecture** is an architectural method that **relies on multiple independently deployed services**. These services handle some website logic and have their own databases, servers, etc for a specific goal. The microservices are **helpful in scaling** applications by decoupling the business logic into domain-specific services with independent code bases. Think of it like a food court with seperate stalls. One does pizza, one does main courses, another one’s doing smoothies and icecreams, etc. Each has its own staff, kitchen and menu. (The anology made me hungry though 😋 )

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1744146140422/e29394c7-5919-42e3-83a2-2794c2410d66.png align="center")

Further Reading: [Monoliths vs Microservices: A Guide to Choosing the Right Architecture for Your Application](https://blog.coderco.io/p/monoliths-vs-microservices-a-guide)

# LeetCode’s Architecture Explained

By now you would have guessed why are we discussing the Microservices architecture in detail. You guessed it right! — **LeetCode uses a Microservices architecture** and each microservice has a separate task to perform. Lets break down LeetCode’s architecture now.

LeetCode’s backend architecture is designed to **support millions of users** each day, low-latency real-time code execution (that also needs to be **secure**) and scalable **contest management for 30k+ users** in each contest. Here is my take on how their backend architecture likely works:

### Microservices Architecture:

LeetCode uses various backend services for managing different aspects of the website instead of a singleton server handling all the requests. The Backend Services are as follows:

* **User Service** - Handles auth, profile, settings, etc
    
* **Problem Service** - Stores problems, tags, discussions.
    
* **Submission Service (Most important)** - Manages user submissions, test results, timings, validation.
    
* **Leaderboard/ Contest Service** - Ranks, real-time contest scores.
    
* **Notification Service** - For updates, badges, or reminders.
    

These services perform read and write operations on various databases, each deployed for a specific purpose:

* **Relational DB (PostgreSQL)** - User data, contest records, Submissions storing, etc
    
* **NoSQL (Redis)** - for caching, session management.
    
* **Object Storage (eg. AWS S3)** - for badges, user images and other assets (like large testcases files, etc)
    

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1744146282756/6726c20e-4baf-45e9-80b3-d0f5ae6927d2.png align="center")

Now that we have an overview of the whole architecture, let’s deep dive into the code execution environment. How really does your code gets executed when you click **“Submit”**?

# What Happens When You Click “Submit”? (Judge0 Explained)

Well, You all might have a basic idea of what might be going on behind the scene when you click submit. You might guess that once the button is clicked, the code goes to the backend where it gets executed and the result of the execution are returned and displayed on the frontend. Well, that is correct from an abstract view or a REST API point of view. But what happens when your written code reaches the backend? Where is it executed? How websites like LeetCode are able to keep the latency low? How secure are these executions? Let’s find out!

LeetCode or any other code execution platform needs to safely execute user’s code and that too in multiple widely used languages. The technique used for secure code execution is called **“Secure Sandboxing”**.

* **Secure Sandboxing** helps us run a code in an **isolated environment** (mostly docker containers or Kubernetes pods). This also helps in preventing abuse of memory usage on the main server machines (i.e. resource limiting). And these secure code execution sandboxes are **pre-configured** with necessary compilers, interpreters and other required packages for **multi-language execution** support.
    

The **Submission service**, as seen in the high-level architecture above upon receiving the user code, sends it to a **message queue** (popular options are RabbitMQ, Kafka,etc) where the code execution request waits for a worker pod to pick it up and execute it. Upon execution, the results are validated inside the pod and the results are returned to a *callback url* with the time & memory usage details and error messages(if any).

A basic queue item will contain:

* **User’s submitted code**
    
* **Selected Language**
    
* **Problem ID**
    
* **Input test cases**
    
* Other necessary info for compilation, if any
    

Callback URL (**Webhook**): A callback URL can be the URL that your worker pod can “PUT” the result of execution of code when all the input test cases are executed. Further, you can use the callback url to store the results of the user submission in the DB.

Then long poll the result on the frontend(or using Websockets) to fetch the results from the backend and show the verdict to the user.

This execution system looks a bit complex to implement using dockers, and ready queue. You might be surprised to know we have a lot of open-source based execution engines for this use case. Let deep dive in one such open-source execution engine called “**Judge0**”.

### What is Judge0 Execution Engine?

Judge0 is an **open-source, robust, and scalable code execution engine** that you can use to build platforms like **LeetCode, HackerRank, or Codeforces**. It allows you to **compile and run code in multiple programming languages securely**, with detailed output, error logs, and real-time support.

Official Website: [https://judge0.com/](https://judge0.com/)

Github Open-Source Repository: [https://github.com/judge0/judge0](https://github.com/judge0/judge0)

The above explanation of submission and execution of the user’s submitted code is how exactly Judge0 works. It uses a **Redis** & **PostgreSQL** with **Docker** based workers with all the compilers and interpreters pre-installed for **60+ supported languages**!

Main Features of Judge0:

* **Multi-language execution Support**
    
* **Secure Sandboxing** (Docker containerization)
    
* **REST API Access** \- Submit and Retrieve results of code executions via HTTP requests.
    
* **Webhook Support** (Callback URL functionality) - Notify your backend when a submission is complete, then the backend can store the submission execution details on the database.
    

### Testing Judge0 API for Code Execution

You can either use RapidAPI to get your api key and test the RESTful API code submission and result retrieval using postman or you can test judge0 here: [Judge0 IDE](https://ide.judge0.com/) or [Judge0 Dummy Client](https://ce.judge0.com/dummy-client.html).

For this blog, We will use rapid API for sending submission and getting the results for our submission. Let’s get started.

First, get started by creating a account on RapidAPI and create your judge0 api key and url [here](https://rapidapi.com/judge0-official/api/judge0-ce/pricing).

Select the Basic Tier for free now and get your API keys and URL *(or go ahead & use my api keys and url🤭)*.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1744146476956/af3b3ee3-d6fd-447d-b0ae-3366059f9a47.png align="center")

On the left hand side, you can find some endpoints and their codes that can be used directly in your code. Feel free to explore all the endpoints and try more endpoints beyond the scope of this article.

Lets open Postman and create our first submission:

First we will be creating a “**POST**” request for submitting a code for execution. Enter the URL: [https://judge0-ce.p.rapidapi.com/submissions?base64\_encoded=true](https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true)

Choose the Method as “**POST**”. Add the API keys (’**x-rapidapi-key**’ & ‘**x-rapidapi-host**’ provided to you by RapidAPI) in the params section of the request in Postman.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1744146622578/de5da90a-509e-4b0e-946a-3b4a25bf5c71.png align="center")

Now we will be adding the user’s submitted code and other info required for execution of the code in the **body** of our **POST request**. Copy this body and add it in the body of the request.

```json
{
  "source_code": "I2luY2x1ZGUgPHN0ZGlvLmg+CgppbnQgbWFpbih2b2lkKSB7CiAgY2hhciBuYW1lWzEwXTsKICBzY2FuZigiJXMiLCBuYW1lKTsKICBwcmludGYoImhlbGxvLCAlc1xuIiwgbmFtZSk7CiAgcmV0dXJuIDA7Cn0=",
  "language_id": 52,
  "stdin": "world"
}
```

The **final request** will look something like this:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1744146657912/12d51ec3-da07-4ea1-a297-9d9dc46a5f82.png align="center")

**Note**: The `source_code` field has the **base64 encoded** for for a basic printing “Hello World” program.

Okay! Now we are ready to make our first submission. Hit “**Send**” and you will get a **token** in the response from the Judge0 execution engine. The response like this:

```json
{
    "token": "6990ea5f-f915-4168-921c-1cb58826481b"
}
```

This **token** can be used later to **query about the status of our code’s execution**. The status IDs along with the info is returned when you query the submission with the following token.

**Status IDs:**

* `1` : “**In queue**”, i.e. the submission is currently not taken up for execution by any worker and it waiting in the ready queue.
    
* `2` : “**Processing**”, i.e. the submission is being processed by one of the workers
    
* `3` or above: Status IDs equal or above 3 denotes that the code execution has been **completed**. The response of these requests come with the status description of the result of code execution such as “**Accepted**”, “**Runtime Error**” etc.
    

Lets query the result of submitted code. We will do this by querying the token received by Judge0. Go ahead and enter this url in the postman url and select the “**GET**” method.

URL: [https://judge0-ce.p.rapidapi.com/submissions/{enter\_your\_token\_here}?base64\_encoded=true](https://judge0-ce.p.rapidapi.com/submissions/%7Benter_your_token_here%7D?base64_encoded=true)

Enter your token received for your submission in thi URL and hit “**Send**”. You will recieve the submission status with all other compiled information. The response will look something like this:

```json
{
    "stdout": "aGVsbG8sIMKK5Qo=",
    "time": "0.002",
    "memory": 20716,
    "stderr": null,
    "token": "6990ea5f-f915-4168-921c-1cb58826481b",
    "compile_output": null,
    "message": null,
    "status": {
        "id": 3,
        "description": "Accepted"
    }
}
```

Okay! so we have **made our first submission** on Judge0 engine and **received the polling response** too. Now you can play around with other endpoints and learn more about the Judge0 api.

### Self Deploying Judge0 Server Service

Free API has a very small rate limit and will not be ideal for an application like LeetCode. If you are thinking of using Judge0 in a LeetCode like application, you might consider self-deploy Judge0 using its Github repo in a cloud service (GCP, AWS, Azure, etc).

A useful resource for Self-deploying Judge0 can be referred here:

Article: [Let’s Deploy our Online Code Executor in Google Cloud - DEV Community](https://dev.to/nilmadhabmondal/let-s-deploy-our-online-code-executor-in-google-cloud-41b0)

If not a big fan of reading articles: [https://youtu.be/6nkNUDNhSYI?feature=shared](https://youtu.be/6nkNUDNhSYI?feature=shared)

# Scalability & Security Considerations for Judge0 Architecture

For building a scalable application like LeetCode, you need to take care of security pitfalls and scale your application for **securely** **handling traffic**. Some recommended practices for achieving this are:

* **Rate Limiting** users to prevent brute-force or DOS attacks
    
* **Input Validation** & Code sanitization for maintaining workers’ health
    
* Removing request bottlenecks by using job queues & polling/webhooks for results (**async execution**)
    
* Monolithic Architecture is **NOT** recommended. Use different microservices for better scaling.
    
* **Cache frequently accessed data** like: Frequently accessed Problems, leaderboards, profile data, etc.
    

# Conclusion

**Alrighty! We’ve come a long way in this article.**

We explored the high-level architecture behind coding platforms like LeetCode, HackerRank, and Codeforces. We took a deep dive into how things work under the hood and what really happens when you click “Submit.”

After reading this, I’m sure you’ll start looking at these code execution and practice platforms with a more sophisticated perspective.

Feel free to drop any questions or thoughts in the comments!

Keep exploring, dig into scalability challenges and solutions you find online, and just get your brain train running — you never know what amazing things you might build!

# Next Steps: Create Your Own LeetCode!

I would highly encourage everybody reading this to try and implement such projects from scratch as you get to learn alot about how these real world bottlenecks and problems are handled and the experienced gained is immense!

**Why from scratch?** A quote from Richard Feynman: “What I cannot create, I do not understand”. You should test your learning with real-world projects!

Until Next Time. Signing Off! 🫡