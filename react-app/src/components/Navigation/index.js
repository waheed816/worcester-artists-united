import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import { useModal } from "../../context/Modal";
import TechInfoModal from '../TechInfoModal';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);
	const { closeModal } = useModal();

	return (
		<div className='navigation-bar'>
			<div className='navigation-bar-container'>
					<NavLink exact to="/" className='navigation-home-link'>
						<div className='navigation-home-link-container'>
							<div>
								<div >
									<div>
											<i class="fa-solid fa-location-dot"> WORCESTER</i>
									</div>
									<div>
											<i className="fa-solid fa-palette"> ARTISTS</i>
									</div>
									<div>
											<i class="fa-solid fa-hand-fist"> UNITED</i>
									</div>
								</div>
							</div>
						</div>
					</NavLink>
					<a
						href="https://github.com/waheed816/worcester-artists-united"
						target="_blank"
						rel="noopener noreferrer"
						className="recruiterLinks"
					>
						<i class="fa-brands fa-github"> GITHUB</i>

					</a>
					<a
						href="https://www.linkedin.com/in/waheed816/"
						target="_blank"
						rel="noopener noreferrer"
						className="recruiterLinks"
					>
						<i class="fa-brands fa-linkedin"> LinkedIn</i>
					</a>
					<a
						href="https://waheed816.github.io/"
						target="_blank"
						rel="noopener noreferrer"
						className="recruiterLinks"
					>
						<i class="fa-solid fa-folder-open"> PORTFOLIO</i>

					</a>
					<OpenModalButton
						buttonText = <i class="fa-solid fa-gears">TECH INFO</i>
						onItemClick={closeModal}
						modalComponent={<TechInfoModal />}
					/>
					{/* <i class="fa-solid fa-list-ul"> TECH INFO</i> */}
					<div>
						<div className='navigation-bar-right-side'>
							<div className='second-to-right-side-div'>
								{isLoaded && !sessionUser &&
									<li>
										<OpenModalButton
											buttonText="POST YOUR ARTWORK"
											onItemClick={closeModal}
											modalComponent={<LoginFormModal />}
										/>
									</li>
								}
								{isLoaded && sessionUser && !sessionUser.artist &&
									<li>
										<NavLink exact to={`/artistProfileForm/${sessionUser.id}`}>
											<i className="fa-solid fa-paint-roller navigation-view-all-artists"> POST YOUR ARTWORK
										</i></NavLink>
									</li>
								}
								{isLoaded && sessionUser && sessionUser.artist &&
									<li>
										<NavLink exact to={`/postArtworkForm/${sessionUser.id}`}>
											<i className="fa-solid fa-brush navigation-view-all-artists"> POST YOUR ARTWORK </i>
										</NavLink>
									</li>
								}
								<li>
									{isLoaded && !sessionUser &&
										<li>
											<OpenModalButton
												buttonText="VIEW YOUR WISHLIST"
												onItemClick={closeModal}
												modalComponent={<LoginFormModal />}
											/>
										</li>
									}
									{isLoaded && sessionUser &&
										<div>
											<NavLink to={`/art_pieces/wishlist/${sessionUser.id}`}>
												<i class="fa-solid fa-heart-circle-bolt navigation-view-all-artists"> WISHLIST</i>
											</NavLink>
											{/* <div>

												(ALREADY SAVED TO WISHLIST)
											</div> */}
										</div>
									}

									<NavLink to="/allArtists">
										<i className="fa-solid fa-palette navigation-view-all-artists"> VIEW ALL ARTISTS</i>
									</NavLink>
								</li>
								<li></li>
							</div>
							<div>
								{isLoaded && (
									<div>
										<ProfileButton user={sessionUser} />
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			<div className='navigation-border-line'></div>
		</div>
	);
}

export default Navigation;
