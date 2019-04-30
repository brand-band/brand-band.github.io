var results__ = {
	'dj': 'Even though some people ended up buying the headphones, your sales were a flop and dropped 20% from last quarter, especially after your spokesperson stirred up controversy on Twitter again just days after you released the ad...and you just got called for a private meeting with your boss. Uh oh. Try again?',
	'ts': 'There was a huge backlash on the use of only skinny, white women in your ad, making it to the front page of the New York Times. Many activists are boycotting the brand, the Twitter hashtag #NotMyBody is trending, and sales are plummeting. It’s bad. Try again?',
	'p': 'Your sales did pretty well with your target audience, but a lot of men and non-femme identifying individuals found your product to be too feminine and didn’t end up buying. Your sales were down a bit from last quarter. Try again?',
	'b': 'Your sales did pretty well with your target audience, but a lot of non-male identifying individuals found your product to be too masculine and didn’t end up buying. Your sales were down a bit from last quarter. Try again?',
	'default': 'Your sales did pretty well with your target audience, though it wasn’t the growth you were expecting. Want to try again to try to improve your numbers?'
}

var reactions__ = {
	'b': {
		'ts': {
			'u': {
				'sam': [false, 'Taylor Swift is a pretty feminine figure (and a blonde white woman), so I feel like this is for more feminine users and not me.'],
				'sally': [true, 'I love Taylor Swift, and I love this color blue! I feel like it’s super neutral, would go well with the rest of my wardrobe, plus the slogan makes me feel like a strong fierce woman. I would definitely buy these.'],
				'casey': [false, 'Not a huge fan of Taylor Swift. She’s always talked about feminism with only white cisgender women in mind, and as a black trans female, I feel really excluded. Wouldn’t buy.'],
				'travis': [false, 'Not a product for me. I assume the headphones are for women. Also, Taylor Swift seems more mellow to me, so the slogan is kind of strange.']
			},
			'h': {
				'sam': [false, 'Taylor Swift is a pretty feminine figure (and a blonde white woman), so I feel like this is for more feminine users and not me.'],
				'sally': [true, 'I love Taylor Swift, and I love this color blue! I feel like it’s super neutral, would go well with the rest of my wardrobe, plus the slogan makes me feel like a strong independent woman. I would definitely buy these.'],
				'casey': [false, 'Not a huge fan of Taylor Swift. She’s always talked about feminism with only white cisgender women in mind, and as a black trans female, I feel really excluded. Wouldn’t buy.'],
				'travis': [false, 'Not a product for me. It’s a little too girly. I assume the headphones are for women.']
			},
			't': {
				'sam': [false, 'Taylor Swift is a pretty feminine figure (and a blonde white woman), so I feel like this is for more feminine users and not me.'],
				'sally': [true, 'I love Taylor Swift, and I love this color blue! I feel like it’s super neutral and would the perfect duet with my wardrobe. I would definitely buy these.'],
				'casey': [false, 'Not a huge fan of Taylor Swift. She’s always talked about feminism with only white cisgender women in mind, and as a black trans female, I feel really excluded. Wouldn’t buy.'],
				'travis': [false, 'Not a product for me. It’s a little too girly. I assume the headphones are for women.']
			}
		},
		'tc': {
			'u': {
				'sam': [false, 'Terry Crews is interesting because he’s a really masculine-presenting dude that also is very conscious of subverting the stereotypes of black men. I admire what he does, but I think combined with the word “beast” and the color blue, it feels very masculine. I wouldn’t get this.'],
				'sally': [false, 'I feel uncomfortable when I see Terry Crews in ads. I personally don’t like it when men flaunt their masculinity in that way, even if they address the issue outside of their line of work. I don’t think I would get these.'],
				'casey': [true, 'I love Terry Crews. I appreciate that he’s giving positive representations of black masculinity, as well as bringing awareness of victims of sexual assault within the industry. I love the combo of the blue and Terry--going to pick up a pair next year for myself!'],
				'travis': [true, 'Love the blue color and the idea of “unleashing the beast within.” I feel like these would be good gym headphones, so I’d get them.']
			},
			'h': {
				'sam': [false, 'Terry Crews is interesting because he’s a really masculine-presenting dude that also is very conscious of subverting the stereotypes of black men. I admire what he does, but I think combined with slogan and the color blue, it feels very masculine. I wouldn’t get this.'],
				'sally': [false, 'I feel uncomfortable when I see Terry Crews in ads. I personally don’t like it when men flaunt their masculinity in that way, even if they address the issue outside of their line of work. I don’t think I would get these.'],
				'casey': [false, 'I love Terry Crews. I appreciate that he’s giving positive representations of black masculinity, as well as bringing awareness of victims of sexual assault within the industry. But not a fan of blue because it reminds me of the disgusting male dress shirts I was forced to wear back in high school...probably wouldn’t get these headphones.'],
				'travis': [true, 'Love the blue color and the idea of “hearing what I want.” I feel like these would be good gym headphones, so I’d get them.']
			},
			't': {
				'sam': [false, 'Terry Crews is interesting because he’s a really masculine-presenting dude that also is very conscious of subverting the stereotypes of black men. I admire what he does, but I think combined with the color blue, it feels very masculine. I wouldn’t get this.'],
				'sally': [false, 'I feel uncomfortable when I see Terry Crews in ads. I personally don’t like it when men flaunt their masculinity in that way, even if they address the issue outside of their line of work. I don’t think I would get these.'],
				'casey': [false, 'I love Terry Crews. I appreciate that he’s giving positive representations of black masculinity, as well as bringing awareness of victims of sexual assault within the industry. But not a fan of blue because it reminds me of the disgusting male dress shirts I was forced to wear back in high school...probably wouldn’t get these headphones.'],
				'travis': [true, 'Love the blue color. I feel like these would be good gym headphones, so I’d get them.']
			}
		},
		'dj': {
			'u': {
				'sam': [false, 'But I’m not really into the mainstream rap industry because I think it perpetuates narratives of masculine ownership (plus the slogan feels so masculine), so I’m not a fan of these headphones.'],
				'sally': [false, 'Um, I don’t know if you heard the news about DJ Khaled’s super sexist comments? I just feel uncomfortable by him and his music and the way he’s derogatory towards women. Wouldn’t buy.'],
				'casey': [false, 'Unleash the beast within with DJ Khaled? Seriously? Talk about toxic masculinity. I wouldn’t buy anything with DJ Khaled on it.'],
				'travis': [true, 'Love DJ Khaled’s music! He is totally a beast. They look super trendy on him, and I would totally get these headphones.']
			},
			'h': {
				'sam': [false, 'But I’m not really into the mainstream rap industry because I think it perpetuates narratives of masculine ownership, so I’m not a fan of these headphones.'],
				'sally': [false, 'Um, I don’t know if you heard the news about DJ Khaled’s super sexist comments? I just feel uncomfortable by him and his music and the way he’s derogatory towards women. Wouldn’t buy.'],
				'casey': [false, 'DJ Khaled? Seriously? Talk about toxic masculinity. I wouldn’t buy anything with DJ Khaled on it.'],
				'travis': [true, 'Love DJ Khaled’s music! They look super trendy on him, especially with the blue, and I would totally get these headphones.']
			},
			't': {
				'sam': [false, 'But I’m not really into the mainstream rap industry because I think it perpetuates narratives of masculine ownership, so I’m not a fan of these headphones.'],
				'sally': [false, 'Um, I don’t know if you heard the news about DJ Khaled’s super sexist comments? I just feel uncomfortable by him and his music and the way he’s derogatory towards women. Wouldn’t buy.'],
				'casey': [false, 'DJ Khaled? Seriously? Talk about toxic masculinity. I wouldn’t buy anything with DJ Khaled on it.'],
				'travis': [true, 'Love DJ Khaled’s music! They look super trendy on him, especially with the blue, and I would totally get these headphones.']
			}
		}
	},
	'p': {
		'ts': {
			'u': {
				'sam': [false, 'I love wearing pink, and I’m glad it no longer has the connotations of girliness that it had years ago. But combined with Taylor Swift, who I find is super feminine...it seems to be for users who are more feminine and not me.'],
				'sally': [true, 'I love Taylor Swift, and pink is totally my color! It would go well with the rest of my wardrobe. I would definitely buy these.'],
				'casey': [false, 'I LOVE pink. I just wish it wasn’t such a huge signifier of your gender identity...especially with Taylor Swift wearing them? I don’t think these headphones are for me.'],
				'travis': [false, 'Not a product for me. It’s a little too girly with the pink and Taylor Swift. I assume the headphones are for women.']
			},
			'h': {
				'sam': [false, 'Taylor Swift is a pretty feminine figure (and a blonde white woman), so I feel like this is for more feminine users and not me.'],
				'sally': [true, 'I love Taylor Swift, and I love this color pink! I feel like it’s super neutral, would go well with the rest of my wardrobe, plus the slogan makes me feel like a strong independent woman. I would definitely buy these.'],
				'casey': [false, 'Not a huge fan of Taylor Swift. She’s always talked about feminism with only white cisgender women in mind, and as a black trans female, I feel really excluded. Wouldn’t buy.'],
				'travis': [false, 'Not a product for me. It’s a little too girly. I assume the headphones are for women.']
			},
			't': {
				'sam': [false, 'Taylor Swift is a pretty feminine figure (and a blonde white woman), and with the pink, I feel like this is for more feminine users and not me.'],
				'sally': [true, 'I love Taylor Swift, and I love this color pink! What a great statement color. I would definitely buy these.'],
				'casey': [false, 'Not a huge fan of Taylor Swift. She’s always talked about feminism with only white cisgender women in mind, and as a black trans female, I feel really excluded. Wouldn’t buy.'],
				'travis': [false, 'Not a product for me. It’s a little too girly. I assume the headphones are for women.']
			}
		},
		'tc': {
			'u': {
				'sam': [true, 'I love wearing pink, and I’m glad it no longer has the connotations of girliness that it had years ago so someone like Terry can also own it. I would get these headphones!'],
				'sally': [false, 'I feel uncomfortable when I see Terry Crews in ads. I personally don’t like it when men flaunt their masculinity in that way, even if they address the issue outside of their line of work. I don’t think I would get these.'],
				'casey': [true, 'I love Terry Crews. I appreciate that he’s giving positive representations of black masculinity, as well as bringing awareness of victims of sexual assault within the industry. I love the combo of the pink and Terry--going to pick up a pair next year for myself!'],
				'travis': [false, 'Eh, too pink, even with Terry there. Wouldn’t get it.']
			},
			'h': {
				'sam': [true, 'Terry Crews is interesting because he’s a really masculine-presenting dude that also is very conscious of subverting the stereotypes of black men. I admire what he does, and with the pink, I think he’s really representing this in his work. I would get these headphones (also I love pink!).'],
				'sally': [false, 'I feel uncomfortable when I see Terry Crews in ads. I personally don’t like it when men flaunt their masculinity in that way, even if they address the issue outside of their line of work. I don’t think I would get these.'],
				'casey': [true, 'I love Terry Crews. I appreciate that he’s giving positive representations of black masculinity, as well as bringing awareness of victims of sexual assault within the industry. I love the combo of the pink and Terry--going to pick up a pair next year for myself!'],
				'travis': [false, 'Eh, don’t like the color, even with Terry there. Wouldn’t buy.']
			},
			't': {
				'sam': [true, 'Terry Crews is interesting because he’s a really masculine-presenting dude that also is very conscious of subverting the stereotypes of black men. I admire what he does, and with the color pink (which I love), I would definitely buy this.'],
				'sally': [false, 'I feel uncomfortable when I see Terry Crews in ads. I personally don’t like it when men flaunt their masculinity in that way, even if they address the issue outside of their line of work. I don’t think I would get these.'],
				'casey': [true, 'I love Terry Crews. I appreciate that he’s giving positive representations of black masculinity, as well as bringing awareness of victims of sexual assault within the industry. I love the combo of the pink and Terry--going to pick up a pair next year for myself!'],
				'travis': [false, 'Eh, not a fan of pink. I won’t buy these.']
			}
		},
		'dj': {
			'u': {
				'sam': [false, 'I love wearing pink, and I’m glad it no longer has the connotations of girliness that it had years ago. But I’m not really into the mainstream rap industry because I think it perpetuates narratives of masculine ownership, so I’m not a fan of these headphones.'],
				'sally': [false, 'Um, I don’t know if you heard the news about DJ Khaled’s super sexist comments? I just feel uncomfortable by him and his music and the way he’s derogatory towards women. Wouldn’t buy.'],
				'casey': [false, 'Unleash the beast within with DJ Khaled? Seriously? Talk about toxic masculinity. I wouldn’t buy anything with DJ Khaled on it.'],
				'travis': [true, 'Love DJ Khaled’s music! He is totally a beast. They look super trendy on him even though they’re pink, and I would totally get these headphones.']
			},
			'h': {
				'sam': [false, 'But I’m not really into the mainstream rap industry because I think it perpetuates narratives of masculine ownership, so I’m not a fan of these headphones.'],
				'sally': [false, 'Um, I don’t know if you heard the news about DJ Khaled’s super sexist comments? I just feel uncomfortable by him and his music and the way he’s derogatory towards women. Wouldn’t buy.'],
				'casey': [false, 'DJ Khaled? Seriously? Talk about toxic masculinity. I wouldn’t buy anything with DJ Khaled on it.'],
				'travis': [true, 'Love DJ Khaled’s music! They look super trendy on him even though they’re pink, and I would totally get these headphones.']
			},
			't': {
				'sam': [false, 'I LOVE pink, but I’m not really into the mainstream rap industry because I think it perpetuates narratives of masculine ownership, so I’m not a fan of these headphones.'],
				'sally': [false, 'Um, I don’t know if you heard the news about DJ Khaled’s super sexist comments? I just feel uncomfortable by him and his music and the way he’s derogatory towards women. Love that shade of pink, but wouldn’t buy.'],
				'casey': [false, 'DJ Khaled? Seriously? Talk about toxic masculinity. I wouldn’t buy anything with DJ Khaled on it.'],
				'travis': [true, 'Love DJ Khaled’s music! They look super trendy on him, even with the pink, and I would totally get these headphones.']
			}
		}
	},
	'y': {
		'ts': {
			'u': {
				'sam': [false, 'Taylor Swift is a pretty feminine figure (and a blonde white woman), so I feel like this is for more feminine users and not me.'],
				'sally': [true, 'I love Taylor Swift, and I love this color yellow! I feel like it’s super trendy, would go well with the rest of my wardrobe, plus the slogan makes me feel like a strong fierce woman. I would definitely buy these.'],
				'casey': [false, 'Not a huge fan of Taylor Swift. She’s always talked about feminism with only white cisgender women in mind, and as a black trans female, I feel really excluded. Wouldn’t buy.'],
				'travis': [false, 'Not a product for me. It’s a little too girly. I assume the headphones are for women.']
			},
			'h': {
				'sam': [false, 'Taylor Swift is a pretty feminine figure (and a blonde white woman), so I feel like this is for more feminine users and not me.'],
				'sally': [true, 'I love Taylor Swift, and I love this color yellow! It’s become a really trendy color, would go well with the rest of my wardrobe, plus the slogan makes me feel like a strong fierce woman. I would definitely buy these.'],
				'casey': [false, 'Not a huge fan of Taylor Swift. She’s always talked about feminism with only white cisgender women in mind, and as a black trans female, I feel really excluded. Wouldn’t buy.'],
				'travis': [false, 'Not a product for me. It’s a little too girly. I assume the headphones are for women.']
			},
			't': {
				'sam': [false, 'Taylor Swift is a pretty feminine figure (and a blonde white woman), so I feel like this is for more feminine users and not me.'],
				'sally': [true, 'I love Taylor Swift, and I love this color yellow! It’s gotten super trendy as of late and would be the perfect duet with the rest of my wardrobe. I would definitely buy these.'],
				'casey': [false, 'Not a huge fan of Taylor Swift. She’s always talked about feminism with only white cisgender women in mind, and as a black trans female, I feel really excluded. Wouldn’t buy.'],
				'travis': [false, 'Not a product for me. It’s a little too girly. I assume the headphones are for women.']
			}
		},
		'tc': {
			'u': {
				'sam': [false, 'Terry Crews is interesting because he’s a really masculine-presenting dude that also is very conscious of subverting the stereotypes of black men. I admire what he does, but I think combined with the word “beast” and the color yellow, it feels very masculine. I wouldn’t get this.'],
				'sally': [false, 'I feel uncomfortable when I see Terry Crews in ads. I personally don’t like it when men flaunt their masculinity in that way, even if they address the issue outside of their line of work. I don’t think I would get these.'],
				'casey': [true, 'I love Terry Crews. I appreciate that he’s giving positive representations of black masculinity, as well as bringing awareness of victims of sexual assault within the industry. I love the combo of the yellow and Terry--going to pick up a pair next year for myself!'],
				'travis': [true, 'Love the yellow color and the idea of “unleashing the beast within.” I feel like these would be good gym headphones, so I’d get them.']
			},
			'h': {
				'sam': [true, 'Terry Crews is interesting because he’s a really masculine-presenting dude that also is very conscious of subverting the stereotypes of black men. I admire what he does, and I love the color. Would get these.'],
				'sally': [false, 'I feel uncomfortable when I see Terry Crews in ads. I personally don’t like it when men flaunt their masculinity in that way, even if they address the issue outside of their line of work. I don’t think I would get these.'],
				'casey': [true, 'I love Terry Crews. I appreciate that he’s giving positive representations of black masculinity, as well as bringing awareness of victims of sexual assault within the industry. I love the combo of the yellow and Terry--going to pick up a pair next year for myself!'],
				'travis': [true, 'Love the yellow color and the idea of “hearing what I want.” I feel like these would be good gym headphones, so I’d get them.']
			},
			't': {
				'sam': [false ,'Terry Crews is interesting because he’s a really masculine-presenting dude that also is very conscious of subverting the stereotypes of black men. I admire what he does, but I think combined with the yellow color, it feels very masculine. I wouldn’t get this.'],
				'sally': [false, 'I feel uncomfortable when I see Terry Crews in ads. I personally don’t like it when men flaunt their masculinity in that way, even if they address the issue outside of their line of work. I don’t think I would get these.'],
				'casey': [true, 'I love Terry Crews. I appreciate that he’s giving positive representations of black masculinity, as well as bringing awareness of victims of sexual assault within the industry. I love the combo of the yellow and Terry--going to pick up a pair next year for myself!'],
				'travis': [true, 'Love the yellow color. I feel like these would be good gym headphones, so I’d get them.']
			}
		},
		'dj': {
			'u': {
				'sam': [false, 'But I’m not really into the mainstream rap industry because I think it perpetuates narratives of masculine ownership (plus the slogan feels super masculine), so I’m not a fan of these headphones.'],
				'sally': [false, 'Um, I don’t know if you heard the news about DJ Khaled’s super sexist comments? I just feel uncomfortable by him and his music and the way he’s derogatory towards women. Wouldn’t buy.'],
				'casey': [false, 'Unleash the beast within with DJ Khaled? Seriously? Talk about toxic masculinity. I wouldn’t buy anything with DJ Khaled on it.'],
				'travis': [true, 'Love DJ Khaled’s music! He is totally a beast. They look super trendy on him, and I would totally get these headphones.']
			},
			'h': {
				'sam': [false, 'But I’m not really into the mainstream rap industry because I think it perpetuates narratives of masculine ownership. Plus, DJ Khaled definitely only “hears what he wants” and thinks he’s the king of everyone...so I’m not a fan of these headphones.'],
				'sally': [false, 'Um, I don’t know if you heard the news about DJ Khaled’s super sexist comments? I just feel uncomfortable by him and his music and the way he’s derogatory towards women. Wouldn’t buy.'],
				'casey': [false, 'DJ Khaled? Seriously? Talk about toxic masculinity. I wouldn’t buy anything with DJ Khaled on it.'],
				'travis': [true, 'Love DJ Khaled’s music! They look super trendy on him, especially with the yellow, plus the slogan makes me feel really independent. I would totally get these headphones.']
			},
			't': {
				'sam': [false, 'But I’m not really into the mainstream rap industry because I think it perpetuates narratives of masculine ownership, so I’m not a fan of these headphones.'],
				'sally': [false, 'Um, I don’t know if you heard the news about DJ Khaled’s super sexist comments? I just feel uncomfortable by him and his music and the way he’s derogatory towards women. Wouldn’t buy.'],
				'casey': [false, 'DJ Khaled? Seriously? Talk about toxic masculinity. I wouldn’t buy anything with DJ Khaled on it.'],
				'travis': [true, 'Love DJ Khaled’s music! They look super trendy on him, especially with the yellow, and I would totally get these headphones.']
			}
		}
	}
};
