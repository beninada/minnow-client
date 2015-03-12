define([], function() {

	var commentResources = [
		{
			author: "Chris Speegle",
			comment: "This video was incredibly informative! I couldn't of explained this problem better myself! Anyone else want to chime in?",
			replies: [
				{
					author: "Shane Brimer",
					comment: "Yea, I agree! This video really helped me understand the material!"
				},
				{
					author: "Grant Weisnoski",
					comment: "Nah, I couldn't really follow this video and thought the professor explained it better.",
					replies: [
						{
							author: "Chris Speegle",
							comment: "What do you think could of been better?",
							replies: [
								{
									author: "Grant Weisnoski",
									comment: "The video could of been more descriptive."
								}
							]
						},
						{
							author: "Benjamin Inada",
							comment: "I agree with Grant! Very well said."
						}
					]
				},
				{
					author: "Bonnie Trang",
					comment: "Thanks for the video Chris! I would of spent hours looking at this, but the video helped me learn the material really quickly."
				}
			]
		},
		{
			author: "Richard Tominaga",
			comment: "Anyone seen this video? Might be a good one to watch before our test on Friday!",
			replies: [
				{
					author: "Jennifer Brimer",
					comment: "This video is a lifesaver Richard! I was struggling with the material before hand."
				}
			]
		}
	];

	function getComments() {
		return commentResources;
	}

	return {
		getComments: getComments
	};

});