//* You will be provided with a block of text, spanning not more than hundred lines. Your task is to find the unique e-mail addresses present in the text. You could use Regular Expressions to simplify your task. And remember that the "@" sign can be used for a variety of purposes! Requirements are simplified versus real world. There can be a number of strings separated by dots before and after the "@" symbol. Strings will be made up of characters in the ranges a-z, A-Z, 0-9, _ (underscore).


//* Input Format

// The first line contains an integer N (N<=100), which is the number of lines present in the text fragment which follows.
// From the second line, begins the text fragment (of N lines) in which you need to search for e-mail addresses.


//* Output Format

// All the unique e-mail addresses detected by you, in one line, in lexicographical order, with a semi-colon as the delimiter.


//* Sample Input

////? 19
////? HackerRank is more than just a company
////?     We are a tight group of hackers, bootstrappers, entrepreneurial thinkers and innovators. We are building an engaged community of problem solvers. Imagine the intelligence and value that a room would hold if it contained hackers/problem solvers from around the world? We're building this online.
////? Hypothesis: Every hacker loves a particular type of challenge presented in a certain set of difficulty. If we build a large collection of real world challenges in different domains with an engaging interface, it is going to be incredible! Join us to create history.
////? Available Positions
////? Product Hacker product@hackerrank.com
////? Challenge Curator
////? Product Evangelist
////? Product Designer
////? Content Creator
////? ACM World Finals Hacker
////? Backend C++ Hacker
////? Mail us at hackers@hackerrank.com to chat more. Or you can write to us at interviewstreet@hackerrank.com!
////? HACKERRANK PERKS
////? Working for a startup is hard work, but there are plenty of benefits of working for a small, fun, growing team.
////? [Image] Perk: Get tools for the jobAll the Right ToolsWe know that everyone's perfect workspace is unique to them. We will get you set up with whatever equipment you need to start hacking - a new 15” Macbook Pro or iMac, or a computer of your choice plus a display if you need it. Additionally, if you require any software or other tools, we've got it covered.[Image] Perk: Flexible HoursFlexible HoursBecause we work so hard, we encourage our employees to keep flexible hours and don't require them to track their time. A morning scrum and open communication ensures that the job gets done on time, and we rely on the honor system so that you can work on your own pace.[Image] Perk: HealthcareWellness SupportTo work hard, you have to be healthy. We will cover your health, dental, and visual insurance with no wait period. That means instant benefits from the day you're hired.[Image] Perk: Choice of LocationLocation, Location, LocationWe are the first Indian company to be backed by Y-Combinator, and as a result we have a thriving office in Bangalore and a growing office in Mountain View, CA. Depending on your residency or visa status, we will get you situated in one of our two offices, both of which are located in the heart of their country's tech industry.[Image] Perk: Choice of LocationCreative SupportIf you have a cool side project that you want to launch, we will pay for EC2/heroku servers to get it off the ground. Side projects fuel creativity and learning, which are crucial to the HackerRank culture.
////? CULTURE
////? The culture of a startup is reflective of the founders’ DNA. Larry Page & Sergey Brin were PhD’s from Stanford and that’s why Google is filled with high scoring graders from top schools and is very hard to get in if you’re not a CS major. Similarly, the hacker culture at Facebook is inspired by Zuckerberg, a hacker, the design culture by Steve Jobs and so on.
////? The adjective to describe the environment/founders here is relentless hardworkers. It might be a general trait of a startup but I’m pretty sure it’s a notch higher here and defines the culture. This is what has taken us this far. It’s not working in weekends or allnighters that count, but the effort that goes into building something intellectually engaging for hackers and making it fun is high.
////? You’ll have to embrace randomness and chaos. There’s some level of discipline (eg: daily scrums) but only so much. We push boundaries everyday, stretch our limits but no one complains because there’s a feeling of doing something great at the end of the day, every single day.


//* Sample Output

////? hackers@hackerrank.com;interviewstreet@hackerrank.com;product@hackerrank.com


var regexPattern = /[a-zA-Z0-9_.]+@[a-zA-Z0-9_.]+\b/g

function processData(input) {
    inputLines = input.split('\n')
    var inputLength = +inputLines[0]
    
    var result = [];
    
    for (var i = 1; i <= inputLength; i++) {
        let matches = inputLines[i].match(regexPattern);
        if(matches) result.push(matches);
    }

    result = [...new Set(result.flat().sort())];
    console.log(result.join(';'));
}


processData(`19
HackerRank is more than just a company
    We are a tight group of hackers, bootstrappers, entrepreneurial thinkers and innovators. We are building an engaged community of problem solvers. Imagine the intelligence and value that a room would hold if it contained hackers/problem solvers from around the world? We're building this online.
Hypothesis: Every hacker loves a particular type of challenge presented in a certain set of difficulty. If we build a large collection of real world challenges in different domains with an engaging interface, it is going to be incredible! Join us to create history.
Available Positions
Product Hacker product@hackerrank.com
Challenge Curator
Product Evangelist
Product Designer
Content Creator
ACM World Finals Hacker
Backend C++ Hacker
Mail us at hackers@hackerrank.com to chat more. Or you can write to us at interviewstreet@hackerrank.com!
HACKERRANK PERKS
Working for a startup is hard work, but there are plenty of benefits of working for a small, fun, growing team.
[Image] Perk: Get tools for the jobAll the Right ToolsWe know that everyone's perfect workspace is unique to them. We will get you set up with whatever equipment you need to start hacking - a new 15” Macbook Pro or iMac, or a computer of your choice plus a display if you need it. Additionally, if you require any software or other tools, we've got it covered.[Image] Perk: Flexible HoursFlexible HoursBecause we work so hard, we encourage our employees to keep flexible hours and don't require them to track their time. A morning scrum and open communication ensures that the job gets done on time, and we rely on the honor system so that you can work on your own pace.[Image] Perk: HealthcareWellness SupportTo work hard, you have to be healthy. We will cover your health, dental, and visual insurance with no wait period. That means instant benefits from the day you're hired.[Image] Perk: Choice of LocationLocation, Location, LocationWe are the first Indian company to be backed by Y-Combinator, and as a result we have a thriving office in Bangalore and a growing office in Mountain View, CA. Depending on your residency or visa status, we will get you situated in one of our two offices, both of which are located in the heart of their country's tech industry.[Image] Perk: Choice of LocationCreative SupportIf you have a cool side project that you want to launch, we will pay for EC2/heroku servers to get it off the ground. Side projects fuel creativity and learning, which are crucial to the HackerRank culture.
CULTURE
The culture of a startup is reflective of the founders’ DNA. Larry Page & Sergey Brin were PhD’s from Stanford and that’s why Google is filled with high scoring graders from top schools and is very hard to get in if you’re not a CS major. Similarly, the hacker culture at Facebook is inspired by Zuckerberg, a hacker, the design culture by Steve Jobs and so on.
The adjective to describe the environment/founders here is relentless hardworkers. It might be a general trait of a startup but I’m pretty sure it’s a notch higher here and defines the culture. This is what has taken us this far. It’s not working in weekends or allnighters that count, but the effort that goes into building something intellectually engaging for hackers and making it fun is high.
You’ll have to embrace randomness and chaos. There’s some level of discipline (eg: daily scrums) but only so much. We push boundaries everyday, stretch our limits but no one complains because there’s a feeling of doing something great at the end of the day, every single day.`)
/*
    hackers@hackerrank.com;interviewstreet@hackerrank.com;product@hackerrank.com 
*/

console.log('\n');

processData(`36
Finally this phone is testimony to our quest and ever open ears for hearing from our customers since 1921. We look forward to hearing from you today.
All India National Toll Free Number: 180 0425 0426
Working Hours: 10:00 am to 6:00 pm (Monday ~ Friday),
10:00 am to 2:00 pm (Saturday). To report ATM Card Lost, Kindly contact: +91 (44) 2622 3106 / 2622 3109.
TMB Customer Care: +91 9842 461 461
For all your queries, on any of our services in any branch in India, you can now SMS ï¿½ï¿½ï¿½helpï¿½ï¿½ï¿½ or call +91 9842 461 461. TMBï¿½ï¿½ï¿½s Customer Care team is at your service (10:00am to 5:30pm) & will address your concerns immediately. You can also email us at: customerservice@tnmbonline.com
NRI Help Desk:
Non Resident Indians / Persons of Indian Origin can write to us for priority response to this separate email id for any queries, questions and banking solutions. Email: nricell@tnmbonline.com
TMB Head Office Static Map (Click for Live Map)
Head Office:
Static Location Map (Pointer A) and the contact address of our Registered and Administrative Office:
Tamilnad Mercantile Bank Limited
(A Scheduled Commercial Bank & Authorized Dealers in Foreign Exchange)
57, V.E. Road, Tuticorin, Tamilnadu, India. Zip: 628 002.
Phone: +91 (461) 232 1382 / 232 1929 / 232 1932.
Email: bd@tnmbonline.com
Email: ttn_tmbankhi@sancharnet.in
Global Network of Branch / ATMï¿½ï¿½ï¿½s / Points of Presence:
Click the Branch Network to find out more about the current branches / atms / pop network anwhere in India.
TMB IBD Office Static Map (Click for Live Map)
International Banking Division (IBD / Forex):
Static Location Map of Chennai (Gopalpuram Area - Pointer A) and the complete contact address of our international banking division which takes care of all the overseas and forex activities:
Tamilnad Mercantile Bank Limited
269/2-4, Avvai Shanmugham Road, Royapettah,
Chennai, Tamilnadu, India. Zip: 600 014.
Phone: +91 (44) 2813 1028 / 2813 1029.
Email: ibd@tnmbonline.com
Other Non Banking Administrative Offices:
Click the Non Banking Administrative Offices Network to find out more about the other offices / departments of TMB.
- See more at: http://www.tmb.in/contact_us/our_contact_info_email_and_postal_mail_address.html#sthash.u7R69pmj.dpuf
whymandesign 3 Nov
Can we help eg @WEBiversity @davos: @Delhi listens to @citizens #India @learn #transparency #gov? http://wef.ch/m1ZAW  #WEF @NextBillion
Followed by edutopia
Expand
 Trustlibrary.org ï¿½ï¿½ï¿½@TRUSTlibrary 3 Nov
Can we help eg @WEBiversity @davos: @Delhi listens to @citizens #India @learn #transparency #gov? http://wef.ch/m1ZAW  #WEF @NextBillion`)
/*
    bd@tnmbonline.com;customerservice@tnmbonline.com;ibd@tnmbonline.com;nricell@tnmbonline.com;ttn_tmbankhi@sancharnet.in
*/

console.log('\n');

processData(`71
Adventure
Send a letter to the editor about the content of the Adventure website.
mpotts@ngs.org
Advertising
Why not sponsor an online feature?
jbmccorm@ngs.org
The Complete National Geographic
Use this help form to contact us with comments or support questions regarding The Complete National Geographic on DVD or hard drive.
CNG Help Form
Customer Service: Magazine Subscriptions
Send questions regarding your subscriptions. Check on delivery, expiration dates, or other concerns. Inquiries about National Geographic, National Geographic Kids, and Traveler can be sent to this email address. Customer service is also available online at ngsline@customersvc.com.
Digital Magazine Subscriptions
For questions about digital subscriptions to National Geographic magazine (iPad, Nook, Kindle, or Zinio) email us at ngsdigital@customersvc.com or call 1-800-895-2068. You can also read the digital FAQs online.
Donating to National Geographic
Please contact us at givinginfo@ngs.org or call +1 202 862 8638 with any questions regarding your donation, or how to make a donation in support of the Society's work in exploration, research, and education. Thank you for your support!
Frequently Asked Questions
Find answers to your questions here.
http://www.nationalgeographic.com/faq/
Games
For questions about downloadable games and Plan It Green Live, please write to:
askngs@nationalgeographic.com and put "Attn: Games" in the subject line.
Genographic Project
Send us your questions regarding the Genographic Project.
genographic@ngs.org
Genographic Project en espaï¿½ï¿½ol
Envienos en espaï¿½ï¿½ol sus preguntas sobre el Proyecto Genographic.
genographicespanol@ngs.org
Mobile Applications and More
Email us with comments or support questions regarding our content for iPhone, iPad, Android, Windows Mobile 7, and more: apps@ngs.org.
For magazine app and digital subscription queries email us at ngsdigital@customersvc.com or call 1-800-895-2068.
National Geographic Channel
Send comments or questions regarding our television programming.
feedback@natgeotv.com
National Geographic Expeditions
For more information or to reserve your space, call toll-free 1-888-966-8687, or reserve online at nationalgeographicexpeditions.com.
For email inquiries use this form.
National Geographic Magazine
Send a letter to the Editor about the content of National Geographic magazine. Letters will be considered for the monthly Forum column.
ngsforum@nationalgeographic.com
National Geographic Maps
Contact us with questions about our maps.
maps@ngs.org
Photography: Stock Photography
National Geographic Stock's photography collection offers the best in rights managed and royalty free wildlife, travel, landscape and lifestyle photographs available for professional editorial and commercial licensing.
stock@ngs.org
Photography: Commercial Assignments
National Geographic Assignment represents international commercial photographers specializing in lifestyle, adventure, travel, and landscape photography. Online portfolios are available.
ngassignment@ngs.org
Photography: Prints
You can order beautiful National Geographic prints for your home or as a great gift. Browse through our collection.
News
Send comments, questions or concerns regarding the National Geographic News site.
newsdesk@nationalgeographic.com
Public Relations
Send press inquiries here.
pressroom@ngs.org
Speakers Bureau
Send inquiries about having a National Geographic photographer, adventurer, explorer, or scientist speak at your next event.
speakers@ngs.org
TOPO! Digital Maps
Send us your product and technical support quesions.
topo@ngs.org
Traveler Magazine
Send a letter about Traveler magazine.
Traveler@ngs.org
Your Shot & Your Shot Puzzles
Help Form
Frequently Asked Questions
Miscellaneous
Not sure where to send your question? Weï¿½ï¿½ï¿½ll pass it to the proper department. Please keep in mind that the high volume of mail does not allow us to send everyone a personal answer.
askngs@nationalgeographic.com`)
/*
    Traveler@ngs.org;apps@ngs.org;askngs@nationalgeographic.com;feedback@natgeotv.com;genographic@ngs.org;genographicespanol@ngs.org;givinginfo@ngs.org;jbmccorm@ngs.org;maps@ngs.org;mpotts@ngs.org;newsdesk@nationalgeographic.com;ngassignment@ngs.org;ngsdigital@customersvc.com;ngsforum@nationalgeographic.com;ngsline@customersvc.com;pressroom@ngs.org;speakers@ngs.org;stock@ngs.org;topo@ngs.org
*/

console.log('\n');

processData(`51
E-MAIL ADDRESSES OF GMs AND DRMs ON IR
RLY	GM E-Mail	Division	DRM E-Mail
CR	gm@cr.railnet.gov.in	Mumbai	drm@bb.railnet.gov.in
Bhusawal	drm@bsl.railnet.gov.in
Pune	drm@pa.railnet.gov.in
Nagpur	drm@ngp.railnet.gov.in
Solapur	drm@sur.railnet.gov.in
ER 	gm@er.railnet.gov.in	Howrah	drmhwh@er.railnet.gov.in
Sealdah	drmsdah@er.railnet.gov.in
Asansol	drmasn@er.railnet.gov.in
Malda	drmmldt@er.railnet.gov.in
ECR 	gm@ecr.railnet.gov.in	Danapur	drmdnr@ecr.railnet.gov.in
Dhanbad	drmdhn@ecr.railnet.gov.in
Mughalsarai	drmmgs@ecr.railnet.gov.in
Samastipur	drmspj@ecr.railnet.gov.in
Sonpur	drmsee@ecr.railnet.gov.in
ECoR    	gm@eastcoastrailway.gov.in  	Khurda Road	drmkur@eastcoastrailway.gov.in
Sambalpur	drmsbp@eastcoastrailway.gov.in
Waltair	drmwat@eastcoastrailway.gov.in
NR 	gm@nr.railnet.gov.in	Delhi	drm@dli.railnet.gov.in
Ambala	drm@umb.railnet.gov.in
Moradabad	drm@mb.railnet.gov.in
Lucknow	drm@lko.railnet.gov.in
Ferozepur	drm@fzr.railnet.gov.in
NCR    	gm@ncr.railnet.gov.in  	Allahabad	drm@ald.railnet.gov.in
Jhansi	drm@jhs.railnet.gov.in
Agra	drm@agc.railnet.gov.in
NER	gm@ner.railnet.gov.in	Izzatnagar	drmizn@ner.railnet.gov.in
Lucknow	drmljn@ner.railnet.gov.in
Varanasi	drmbsb@ner.railnet.gov.in
NFR	gm@nfr.railnet.gov.in	Katihar	drmkir@nfr.railnet.gov.in
Alipurduar	drmapdj@nfr.railnet.gov.in
Tinsukhia	drmtsk@nfr.railnet.gov.in
Lumding	drmlmg@nfr.railnet.gov.in
Rangia	drmrny@nfr.railnet.gov.in
NWR	gm@nwr.railnet.gov.in	Jaipur	drmjp@nwr.railnet.gov.in
Ajmer	drmaii@nwr.railnet.gov.in
Bikaner	drmbkn@nwr.railnet.gov.in
Jodhpur	drmju@nwr.railnet.gov.in
SR	gm@sr.railnet.gov.in	Chennai	drmmas@sr.railnet.gov.in
Madurai	drmmdu@sr.railnet.gov.in
Salem	drmsa@sr.railnet.gov.in
Palghat	drmpgt@sr.railnet.gov.in
Tiruchirapalli	drmtpj@sr.railnet.gov.in
Trivandrum	drmtvc@sr.railnet.gov.in
SCR	gm@scr.railnet.gov.in	Secundrabad	drmsc@scr.railnet.gov.in
Hyderabad	drmshyb@scr.railnet.gov.in
Guntkal	drmgtl@scr.railnet.gov.in
Guntur	drmgnt@scr.railnet.gov.in
Nanded	drmned@scr.railnet.gov.in
Vijayawada	drmbza@scr.railnet.gov.in`)
/*
    drm@agc.railnet.gov.in;drm@ald.railnet.gov.in;drm@bb.railnet.gov.in;drm@bsl.railnet.gov.in;drm@dli.railnet.gov.in;drm@fzr.railnet.gov.in;drm@jhs.railnet.gov.in;drm@lko.railnet.gov.in;drm@mb.railnet.gov.in;drm@ngp.railnet.gov.in;drm@pa.railnet.gov.in;drm@sur.railnet.gov.in;drm@umb.railnet.gov.in;drmaii@nwr.railnet.gov.in;drmapdj@nfr.railnet.gov.in;drmasn@er.railnet.gov.in;drmbkn@nwr.railnet.gov.in;drmbsb@ner.railnet.gov.in;drmbza@scr.railnet.gov.in;drmdhn@ecr.railnet.gov.in;drmdnr@ecr.railnet.gov.in;drmgnt@scr.railnet.gov.in;drmgtl@scr.railnet.gov.in;drmhwh@er.railnet.gov.in;drmizn@ner.railnet.gov.in;drmjp@nwr.railnet.gov.in;drmju@nwr.railnet.gov.in;drmkir@nfr.railnet.gov.in;drmkur@eastcoastrailway.gov.in;drmljn@ner.railnet.gov.in;drmlmg@nfr.railnet.gov.in;drmmas@sr.railnet.gov.in;drmmdu@sr.railnet.gov.in;drmmgs@ecr.railnet.gov.in;drmmldt@er.railnet.gov.in;drmned@scr.railnet.gov.in;drmpgt@sr.railnet.gov.in;drmrny@nfr.railnet.gov.in;drmsa@sr.railnet.gov.in;drmsbp@eastcoastrailway.gov.in;drmsc@scr.railnet.gov.in;drmsdah@er.railnet.gov.in;drmsee@ecr.railnet.gov.in;drmshyb@scr.railnet.gov.in;drmspj@ecr.railnet.gov.in;drmtpj@sr.railnet.gov.in;drmtsk@nfr.railnet.gov.in;drmtvc@sr.railnet.gov.in;drmwat@eastcoastrailway.gov.in;gm@cr.railnet.gov.in;gm@eastcoastrailway.gov.in;gm@ecr.railnet.gov.in;gm@er.railnet.gov.in;gm@ncr.railnet.gov.in;gm@ner.railnet.gov.in;gm@nfr.railnet.gov.in;gm@nr.railnet.gov.in;gm@nwr.railnet.gov.in;gm@scr.railnet.gov.in;gm@sr.railnet.gov.in
*/