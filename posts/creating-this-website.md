---
title: 'Creating a website the hardest way Pt 1'
date: '2022-07-20'
draft: false
---

So we all have wanted to have a blog and undoubtedly you have searched for easy, cheap (or free!) hosting and something that is going to let you publish something quick and easy... then there are the few, the brave and the ones of us who have way too much time on their hands. These people venture where few dare, and in doing so let you learn from their mistakes.

So I invite you to learn from all my mistakes.

## Groundwork

Lets get started by laying some groundwork. First I don't recommend you try this at home! As you probably already know I run a small youtube channel where we learn about doing software engineering things. So what is the best way to learn? well it's to do everything the hardest way.

I have wanted to start a blog and a place to store some companions to my videos. At first I looked at some projects like Hugo to build a simple blog based off of some yaml... and don't get me wrong, it looks great. So then I started at looking at where I might host it for cheap... 

And there where a few solutions that provided the ability to do this, even for free for what I was doing. The main ones that come to mind are netlify, digital ocean and linode... and many many more. 

And in the end... I decided on none of the above. I did not use hugo... I did not use netlify, digital ocean or linode. Was it because they lacked the features I needed? no. Where they too expensive? nope, again many of them have free options. So why, in the end, did I decided not to use any of them at all.

This goes back many years when Kelsy Hightower released his git repo called "Kubernetes the hard way" a tutorial that walk you though setting up kubernetes on GCP. I have a lot of reasons why I like helping people but what Kelsy really showed me was to truly understand something, sometimes it was best to just do it the hardest way... So I decided I would do it the hardest way because what better way to learn then that!

And no. I don't mean using an EC2 instances, That would be way too easy! I mean buying a static IP address and hosting it myself on my own hardware. and no. I don't just mean running a react app locally on a raspberry pi. I mean, to the best of my ability, providing a highly available service from my basement!

Now at this point I cant afford to really be highly available with redundant power with backup generators, or redundant ISP's and things like that, but when and where I can I will do what I can to be highly available. I mean in the end I want to provide actually real services that you all can use eventually (they might have backups in the cloud with failover to the cloud... but that is to figure out another day)... And actually would be fun to solve the "hybrid" cloud issue on a small scale.

So lets get into it. I'm going to keep this first blog shortish but you can expect more, and videos explaining the progress that is happening. Today, we are going to just talk about the hardware. Another day, another blog on continuous delivery and software engineering.

The first thing I did was figure out what hardware I needed. I thought about buying some second hand servers but decided against it. You can get some cheep servers for a few hundred bucks but.... they are loud... like really really loud... They consume a lot of power and produce a lot of heat. I mean, I want to run this in my basement so I don't really want any of that. Well... until we get the null cloud into an actual datacenter, something I would LOVE to do... But can't afford it... I wanted something that would give me latitude to run here in my house without breaking my bank.

And I found the perfect framework for me. yes. the framework laptop was just perfect. I'm not sure many people have used it for a datacenter and there are defiantly drawbacks to this... Power via USB-C is not the best for sure, but the 4 USB-C ports are also nice as it means if one fails we have 3 more! And bringing up ports it does not have a good old internet port ether... but the usb-c ports can solve that too...

So the framework laptop is not PERFECT. But I was able to get them for super cheap, run effectively silently and draw very little power. So I was able to get their mother boards and use just the motherboards with nothing else. This was absolutely perfect as they where designed to be power efficient and way more powerful then I need right now! So I got three of the cheaper i7 and got 16 gigs of memory for 2 of them and 32 gigs for the third one. 

This was not cheap... but it was pretty cheap compared to getting real servers coming in at about the price I would get a used server for with comparable memory, if you would like to help me get some real servers in a co-location service to support our learning bringing better services. check out these links with ways to support me!

So moving onto the rest of the hardware.

Ok. so... what is next, well yes I did start by leveraging 2 of [Pine64s RockPro64](https://www.pine64.org/rockpro64/) to help bring in some high availability... in-fact they where the loadbalancers to the entire service, everything from the public internet went through those two rock's... You know what I want? I want to have so much traffic that those two rocks are not enough. that is what I want... But in fact I did not need the rocks because I installed metallb into the cluster serving istio's ingress. So as long as the cluster is working, so is ingress into my cluster, but more on how stuff works in the cluster of machines in another blog... this is just a quick overview!

Anyhow... that is all the computers that I have to power this... almost. We also have some networking. For that i'm using Ubiquiti equipment, It's the best bang for buck that I could find in the "prosumer" market. I needed some more pro features, like the ability to deal with static IP's but also the ability to separate networks securely and a "good enough firewall". One of the priorities was to make sure that the internet traffic that was coming into my network was only able to make it to the network that holds the null cloud. I would love for this to eventually be on it's own physical network hardware... but sadly that is not the case. but I would love to do that at some point! Anyhow, I just have the basic USG - the Ubiquiti Unified Security Gateway. It's a great little bit of hardware and lets me not only vpn into my network if I wanted... But also lets me separate out all my networks. something I have leveraged quite a bit in the past to put smart devices on their own network. Guests on their own network...

Everyone and everything on their own networks and all communication is blocked from network to network. Yeah, I know, will probably not keep me secure... but hey, i'm trying. Zero trust am I right?

Zero trust is hard... Very hard, but I'm trying. That brings me to my last bit of kit for this.

Cloud flare... ok. not really my hardware but hopefully they are protecting my IP address from you! :) if they are not... can you tell me how you found my ip-address? If you can I would love to to know how and make a blog/video on it! Because that is what i'm using Cloudflare for, they provide free ddos protection and let me host this from home in a secure way and hopefully not get my IP address ddos'ed. It's actually really really cool, although it was a little bit of a pain to set up? that is going to be a whole blog on itself because while it was cool... it took some work. But in the end, my ingress has a signed tls cert with cloudflare and cloudflare has a tls cert for my site meaning that your communication with my server is encrypted from your browser to my server... and then we run mtls between servers so in fact... it's always encrypted... period. I said I was doing this the hardest way, not the crappy insecure way!

Oh... yeah. one last thing. Just to make sure everything was as painful as possible. I leanred next.js to make this website and this blog. yeah. I did everything the absolute hardest way. And boy have I learned a lot! I like next.js??? I think. Yeah. this website sucks, I get it... I'm mostly a backend engineer so it's probably going to continue to suck but.... it's a start and I'll make it better in the futture, eventually. I might even make videos on it whenever I learn something interesting!

Anyhow, it's been a month long weekend project and it's been fun! would I recommend someone else follow my footsteps? probably, if you can afford it.

And there we have it. if you are interested in sticking around and seeing more things around this, seeing us take this to the next level, see where it fails and get to read more articles about what we learn. go ahead watch the videos over on youtube and stick around!