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
							alt="Travis Howard"
							src="/static/images/avatar/2.jpg"
						/>
					</ListItemAvatar>
					<ListItemText
						primary="Summer BBQ"
						secondary={
							<React.Fragment>
								<Typography
									component="span"
									variant="body2"
									className="inline"
									color="textPrimary"
								>
									to Scott, Alex, Jennifer
								</Typography>
								{
									" — Wish I could come, but I'm out of town this…"
								}
							</React.Fragment>
						}
					/>
				</ListItem>
				<Divider component="li" />
				<ListItem alignItems="flex-start">
					<ListItemAvatar>
						<Avatar
							alt="Cindy Baker"
							src="/static/images/avatar/3.jpg"
						/>
					</ListItemAvatar>
					<ListItemText
						primary="Oui Oui"
						secondary={
							<React.Fragment>
								<Typography
									component="span"
									variant="body2"
									className="inline"
									color="textPrimary"
								>
									Sandra Adams
								</Typography>
								{
									" — Do you have Paris recommendations? Have you ever…"
								}
							</React.Fragment>
						}
					/>
				</ListItem>
				<Divider component="li" />
				<ListItem alignItems="flex-start">
					<ListItemAvatar>
						<Avatar
							alt="Cindy Baker"
							src="/static/images/avatar/3.jpg"
						/>
					</ListItemAvatar>
					<ListItemText
						primary="Oui Oui"
						secondary={
							<React.Fragment>
								<Typography
									component="span"
									variant="body2"
									className="inline"
									color="textPrimary"
								>
									Sandra Adams
								</Typography>
								{
									" — Do you have Paris recommendations? Have you ever…"
								}
							</React.Fragment>
						}
					/>
				</ListItem>
				<Divider component="li" />
				<ListItem alignItems="flex-start">
					<ListItemAvatar>
						<Avatar
							alt="Cindy Baker"
							src="/static/images/avatar/3.jpg"
						/>
					</ListItemAvatar>
					<ListItemText
						primary="Oui Oui"
						secondary={
							<React.Fragment>
								<Typography
									component="span"
									variant="body2"
									className="inline"
									color="textPrimary"
								>
									Sandra Adams
								</Typography>
								{
									" — Do you have Paris recommendations? Have you ever…"
								}
							</React.Fragment>
						}
					/>
				</ListItem>
				<Divider component="li" />
				<ListItem alignItems="flex-start">
					<ListItemAvatar>
						<Avatar
							alt="Cindy Baker"
							src="/static/images/avatar/3.jpg"
						/>
					</ListItemAvatar>
					<ListItemText
						primary="Oui Oui"
						secondary={
							<React.Fragment>
								<Typography
									component="span"
									variant="body2"
									className="inline"
									color="textPrimary"
								>
									Sandra Adams
								</Typography>
								{
									" — Do you have Paris recommendations? Have you ever…"
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
