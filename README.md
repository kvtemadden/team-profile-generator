# team-profile-generator
This is a team rota/profile generator which accepts user input to build a visual display of the user's team.

It's useful for generating daily rotas, which show who's part of the team and useful contact information for each of the team members.

## Contents
Section | Description
------------ | -------------
[Screenshot](#screenshot) | Screenshots of the Team Profile Generator a link to the repo.
[Functionality](#functionality) | Information on the functionality of the Team Profile Generator.
[Licence](#licence) | Licence for the source code

## Screenshot
![Screenshot of page generated by Team Profile Generator](/assets/sample_page.PNG)
![Screenshot of working Team Profile Generator Prompts](/assets/sample_questions.PNG)

You can access the GitHub Repo via [this link](https://github.com/kvtemadden/team-profile-generator/)

An example of the code generated for the HTML team page can be found [here](https://github.com/kvtemadden/team-profile-generator/blob/main/dist/Team-Rota.html)

Or you can watch a video walkthrough for the project [here](https://drive.google.com/file/d/1nHIf2AuOGxDIG0TujuFjPyjpjZDothar/view?usp=sharing)

If you can't access the video there, you're able to download it [here](https://github.com/kvtemadden/team-profile-generator/blob/main/assets/video_of_app.mp4)

Finally, view a sample of the HTML generated by this tool [here](https://kvtemadden.github.io/team-profile-generator-sample/)

## Functionality
Users should locate the index.js file within this repository on their local system once they've installed it/forked the repository linked to in the screenshot section above. 

Once there, they need to use node index.js to run the inquirer package. 

This will then provide the user with a series of questions which prompts them to answer questions regarding the members within their team.

The initial question will always ask for information surrounding the Manager, who must be included in every project.

>**Manager info asked for:**
- Name
- Employee ID
- Email
- Office phone number

Following this, the user will then be asked if they'd like to include any other employees, be that an Engineer or an Intern.

If they don't then they can just select that they don't want to add another user.

However, if they do want to add either an Engineer or an Intern, they'll be prompted for information regarding:

>**Engineer:**
- Name
- Employee ID
- Email
- GitHub Username

>**Intern:**
- Name
- Employee ID
- Email
- School

Following both of these sets of questions, the user will always be asked if they want to finish their team or if they'd like to add another member.

Once they're done, a prompt will be given: "Rota generated!" and the HTML page will be generated with the team's information.

## Licence
> This site was created under the standard MIT licence.

![GitHub](https://img.shields.io/github/license/kvtemadden/portfolio?color=%23203333&label=LICENCED%20AS&style=for-the-badge)
