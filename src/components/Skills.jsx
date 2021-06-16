import "./css/Skill.css";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));

export default function Skills() {
	const classes = useStyles();

	return (
		<section className="skillsWrapper">
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Paper
							className={
								classes.paper
							}
						>
							Skills
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper
							className={
								classes.paper
							}
						>
							xs=12 sm=6
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper
							className={
								classes.paper
							}
						>
							xs=12 sm=6
						</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper
							className={
								classes.paper
							}
						>
							HTML
						</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper
							className={
								classes.paper
							}
						>
							Javascript
						</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper
							className={
								classes.paper
							}
						>
							CSS
						</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper
							className={
								classes.paper
							}
						>
							Bootstrap
						</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper
							className={
								classes.paper
							}
						>
							Materialize
						</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper
							className={
								classes.paper
							}
						>
							NodeJS
						</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper
							className={
								classes.paper
							}
						>
							Express
						</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper
							className={
								classes.paper
							}
						>
							React
						</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper
							className={
								classes.paper
							}
						>
							SQL
						</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper
							className={
								classes.paper
							}
						>
							MongoDB
						</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper
							className={
								classes.paper
							}
						>
							Git
						</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper
							className={
								classes.paper
							}
						>
							Github
						</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper
							className={
								classes.paper
							}
						>
							Slack
						</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper
							className={
								classes.paper
							}
						>
							Responsive Design
						</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper
							className={
								classes.paper
							}
						>
							Wireframes
						</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper
							className={
								classes.paper
							}
						>
							Balsamiq
						</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper
							className={
								classes.paper
							}
						>
							LucidChart
						</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper
							className={
								classes.paper
							}
						>
							Object-Oriented
							Programming
						</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper
							className={
								classes.paper
							}
						>
							AJAX
						</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper
							className={
								classes.paper
							}
						>
							RESTful Programming
						</Paper>
					</Grid>
				</Grid>
			</div>
		</section>
	);
}
