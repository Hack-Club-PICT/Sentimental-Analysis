# SENTIMENTAL ANALYSIS BACKEND
## GET STARTED
---
Create a virtual environment for running your django application
```bash
python -m venv env
```
### Activate Virtual Environment
On Windows, run
```bash
./env/Scripts/activate
```
On Unix or MacOS, run
```bash
source env/Scripts/activate
```

### Install Dependencies and run Django Server Locally
```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Routes 

1. Classify the Tweet using Tweet-text

POST Request - [https://gentle-gorge-50568.herokuapp.com/api/classify/](https://gentle-gorge-50568.herokuapp.com/api/classify/)

Data:
```json
{
	"text":"Arrested.. been taken in police van. we will fight till our last breath for the dignity of women. H'ble PM @narendramodiji has always spoken about the safety of women and we walk on his path. We will never bow down to the atrocities of fewelements out there. BHARAT MATA KI JAI!",
}
```
Response:
```json
{
    "msg": "Negative Tweet",
    "error": false,
    "tweet": "Arrested.. been taken in police van. we will fight till our last breath for the dignity of women. H'ble PM @narendramodiji has always spoken about the safety of women and we walk on his path. We will never bow down to the atrocities of fewelements out there. BHARAT MATA KI JAI!"
}
```

2. Classify the Recent 10 Tweets Of a given username

POST Request - [https://gentle-gorge-50568.herokuapp.com/api/search/user](https://gentle-gorge-50568.herokuapp.com/api/search/user)

Data:
```json
{
    "user": "realDonaldTrump",
}
```
Response:
```json
{
    "error": false,
    "msg": "Data Processed",
    "data": [
        {
            "user": "realDonaldTrump",
            "text": "Thank you to Joe Scarborough (@JoeNBC) for seeing the light. Our Country is doing great! https://t.co/7vLxNScOjo",
            "type": "Positive Tweet"
        },
        {
            "user": "realDonaldTrump",
            "text": "A 3 day extension for Pennsylvania is a disaster for our Nation, and for Pennsylvania itself. The Democrats are trying to steal this Election. We have to get out and VOTE in even larger numbers. The Great Red Wave is coming!!!",
            "type": "Negative Tweet"
        },
        {
            "user": "realDonaldTrump",
            "text": "Weekly Jobless Claims just hit a 7 month low!",
            "type": "Positive Tweet"
        },
        {
            "user": "realDonaldTrump",
            "text": "....He also worked at, of all places, @Google. They all have big liability!!!",
            "type": "Positive Tweet"
        },
        {
            "user": "realDonaldTrump",
            "text": "So it turns out that the wise guy promoted as “Anonymous” by the @nytimes, named Miles Taylor (who I never even heard of!), was only a little known “staffer” as opposed to a “Senior Administration Official”. He then scammed @CNN, lied to @andersoncooper, &amp; got a job there....",
            "type": "Positive Tweet"
        },
        {
            "user": "realDonaldTrump",
            "text": "Our hearts are with the people of France. America stands with our oldest Ally in this fight. These Radical Islamic terrorist attacks must stop immediately. No country, France or otherwise can long put up with it!",
            "type": "Positive Tweet"
        },
        {
            "user": "realDonaldTrump",
            "text": "RT @ByronYork: Important to note that Miles Taylor was not DHS chief of staff on September 5, 2018, when he published 'Anonymous' op-ed in…",
            "type": "Positive Tweet"
        },
        {
            "user": "realDonaldTrump",
            "text": "Thank you Mark! #MAGA https://t.co/ptqzlqb8ep",
            "type": "Negative Tweet"
        },
        {
            "user": "realDonaldTrump",
            "text": "THANK YOU! #MAGA https://t.co/24HVNRnBSX",
            "type": "Negative Tweet"
        },
        {
            "user": "realDonaldTrump",
            "text": "GDP number just announced. Biggest and Best in the History of our Country, and not even close. Next year will be FANTASTIC!!! However, Sleepy Joe Biden and his proposed record setting tax increase, would kill it all. So glad this great GDP number came out before November 3rd.",
            "type": "Positive Tweet"
        }
    ]
}
```


3. Classify the 20 Tweet with given keyword

POST Request - [https://gentle-gorge-50568.herokuapp.com/api/search/keyword](https://gentle-gorge-50568.herokuapp.com/api/search/keyword)

Data:
```json
{
    "keyword": "hate"
}
```
Response:
```json
{
    "error": false,
    "msg": "Data Processed",
    "data": [
        {
            "user": "doctordangatang",
            "text": "I hate the \"just let people enjoy things\" rhetoric. Because personally, I enjoy criticizing things I do not like. So stfu",
            "type": "Negative Tweet"
        },
        {
            "user": "49double0",
            "text": "Stand on that hate word then I’ll holla at you ✌🏽",
            "type": "Negative Tweet"
        },
        {
            "user": "mistas_bf",
            "text": "I hate that Google Slides accepts this https://t.co/B4oNZOaXhp",
            "type": "Negative Tweet"
        },
        {
            "user": "ginabella",
            "text": "What a sick desperate hateful EFF that poor man is. Blinded by hate and I am sure $$$$\n\n#PromisesMadePromisesKept \n#Trump2020LandslideVictory https://t.co/Ue7FaLhSeQ",
            "type": "Negative Tweet"
        },
        {
            "user": "ChasseBanks",
            "text": "I hate opening up the fridge looking for food knowing damn well I didn’t go grocery shopping 😭😭",
            "type": "Positive Tweet"
        },
        {
            "user": "itsyejinssi",
            "text": "no wonder why many fandoms hate that particular fandom",
            "type": "Negative Tweet"
        },
        {
            "user": "sluttyboimike_",
            "text": "i hate bein gay like i didn’t ask to be a homosexual",
            "type": "Negative Tweet"
        },
        {
            "user": "creativesoulJa",
            "text": "i hate the police so much such fucking losers",
            "type": "Negative Tweet"
        },
        {
            "user": "FIip__",
            "text": "Hate this time of year",
            "type": "Negative Tweet"
        },
        {
            "user": "mynameis_nyy",
            "text": "I hate listening to songs that remind me of people I don’t want to think about 😒",
            "type": "Negative Tweet"
        },
        {
            "user": "slytheriminz",
            "text": "i hate vee with all my guts in the novel, but in the series i just cant bring up myself to hate him. dang why. https://t.co/gkIIJly5ED",
            "type": "Negative Tweet"
        },
        {
            "user": "0kaiJB",
            "text": "I really hate when my coworkers talk to me on my break lmfao",
            "type": "Positive Tweet"
        },
        {
            "user": "hottgirlsyd",
            "text": "Niggas really hate atl 😭😭 https://t.co/VQZwMVxI6D",
            "type": "Positive Tweet"
        },
        {
            "user": "EIiasX",
            "text": "Hate this bitch https://t.co/Dmw6uEZTYO",
            "type": "Negative Tweet"
        },
        {
            "user": "comradeBeeb",
            "text": "Who wanna do my econ work i hate it",
            "type": "Negative Tweet"
        },
        {
            "user": "gabbonesso",
            "text": "Halloween is only 2 days away?!!! Share this video if you love Halloween and hate #COVID19 \n#HalloweenAtHome 🦠🎃\nhttps://t.co/zqw60z1sZc",
            "type": "Positive Tweet"
        },
        {
            "user": "heircfthevcid_",
            "text": "bro you gotta be kidding, i hate epic games",
            "type": "Negative Tweet"
        },
        {
            "user": "sl6vun",
            "text": "Why does most girls after they get rejected they become a lesbian and hate men like wtf brav",
            "type": "Negative Tweet"
        },
        {
            "user": "pukxprincx",
            "text": "i hate it here https://t.co/A8G0fdI31N",
            "type": "Negative Tweet"
        },
        {
            "user": "ishaverse",
            "text": "HAHAHAHHAHAHAHAJAJJA RCISM lmfaoooooo OMG my friends are SOOOOOO RUDE GIRLS HATE THEM lollololololol it's so cool haina lmaoooo ur such a normie lololol asli humour mai dikhata hu bhai lmaooo I am kattar hindu hahaha I'm proud of it 😆😆😆✌️",
            "type": "Positive Tweet"
        }
    ]
}
```



---
