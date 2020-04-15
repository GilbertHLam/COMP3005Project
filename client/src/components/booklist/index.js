import React from "react";
import "./styles.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const BookList = props => {
	const { title, bookList } = props;

	const renderBookList = () => {
		{
			bookList.map(book => (
				<>
					<Divider component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt={book.title} src={book.imageSrc} />
						</ListItemAvatar>
						<ListItemText
							primary={book.title}
							secondary={
								<React.Fragment>
									<Typography
										component="span"
										variant="body2"
										className="inline"
										color="textPrimary"
									>
										{book.title}
									</Typography>
									{book.genre}
								</React.Fragment>
							}
						/>
					</ListItem>
				</>
			));
		}
	};

	return (
		<div className="list">
			<br />
			<div className="title">
				<Typography variant="h3">{title}</Typography>
			</div>
			<List>
				<Divider component="li" />
				<ListItem alignItems="flex-start">
					<ListItemAvatar>
						<Avatar
							alt="The Last Wish"
						/>
					</ListItemAvatar>
					<ListItemText
						primary="The Last Wish"
						secondary={
							<React.Fragment>
								<Typography
									component="span"
									variant="body2"
									className="inline"
									color="textPrimary"
								>
									Andrej Sapkowski
								</Typography>
								{
									" - Geralt is a Witcher, a man whose magic powers, enhanced by long training and a mysterious elixir, have ma..."
								}
							</React.Fragment>
						}
					/>
				</ListItem>
				<Divider component="li" />
				<ListItem alignItems="flex-start">
					<ListItemAvatar>
						<Avatar
							alt="Lord of the Rings"
						/>
					</ListItemAvatar>
					<ListItemText
						primary="The Lord of the Rings"
						secondary={
							<React.Fragment>
								<Typography
									component="span"
									variant="body2"
									className="inline"
									color="textPrimary"
								>
									JRR Tolkien
								</Typography>
								{
									" — All three parts of the epic masterpiece The Lord of the Rings – The Fellowship of the Ring, The Two Towers & T..."
								}
							</React.Fragment>
						}
					/>
				</ListItem>
				<Divider component="li" />
				<ListItem alignItems="flex-start">
					<ListItemAvatar>
						<Avatar
							alt="Cracking the Coding Interview"
						/>
					</ListItemAvatar>
					<ListItemText
						primary="Cracking the Coding Interview"
						secondary={
							<React.Fragment>
								<Typography
									component="span"
									variant="body2"
									className="inline"
									color="textPrimary"
								>
									Gayle Laakmann McDowell 
								</Typography>
								{
									" — I am not a recruiter. I am a software engineer. And as such, I know what it's like to be asked to whip up brillia..."
								}
							</React.Fragment>
						}
					/>
				</ListItem>
				<Divider component="li" />
				<ListItem alignItems="flex-start">
					<ListItemAvatar>
						<Avatar
							alt="Harry Potter and the Philosopher's Stone"
						/>
					</ListItemAvatar>
					<ListItemText
						primary="Harry Potter and the Philosopher's Stone"
						secondary={
							<React.Fragment>
								<Typography
									component="span"
									variant="body2"
									className="inline"
									color="textPrimary"
								>
									JK Rowling
								</Typography>
								{
									" — Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; a lion, an eagle,..."
								}
							</React.Fragment>
						}
					/>
				</ListItem>
				<Divider component="li" />
				<ListItem alignItems="flex-start">
					<ListItemAvatar>
						<Avatar
							alt="A Game of Thrones: A Song of Ice and Fire"
						/>
					</ListItemAvatar>
					<ListItemText
						primary="A Game of Thrones: A Song of Ice and Fire"
						secondary={
							<React.Fragment>
								<Typography
									component="span"
									variant="body2"
									className="inline"
									color="textPrimary"
								>
									George RR Martin
								</Typography>
								{
									" — Winter is coming. Such is the stern motto of House Stark, the northernmost of the fiefdoms that owe allegiance to Ki..."
								}
							</React.Fragment>
						}
					/>
				</ListItem>
			</List>
		</div>
	);
};
export default BookList;
