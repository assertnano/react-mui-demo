import { Ref, forwardRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { IconRender } from './MenuComponents';
import { IMenuItem } from '../menu-items.interface';
import { useSidebarContext } from '../../context/useSidebarContext';
import { ACTION_TYPES } from '../../context/constants';

function MenuItem({
	menuItem,
	level,
	sx,
	open,
}: {
	menuItem: IMenuItem;
	level?: number;
	sx?: any;
	open: boolean;
}) {
	const theme = useTheme();
	const { isActive, dispatch } = useSidebarContext();
	const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));

	const itemHandler = (id: any) => {
		dispatch({ type: ACTION_TYPES.MENU_OPEN, id });
		if (matchesSM) dispatch({ type: ACTION_TYPES.SET_MENU, opened: false });
	};

	// active menu item on page load
	useEffect(() => {
		const currentIndex = document.location.pathname
			.toString()
			.split('/')
			.findIndex((id) => id === menuItem.id);
		if (currentIndex > -1) {
			dispatch({ type: ACTION_TYPES.MENU_OPEN, id: menuItem.id });
		}
		// eslint-disable-next-line
	}, []);

	const itemTarget = menuItem.target ? '_blank' : '_self';
	const listItemProps = {
		component: menuItem?.external
			? forwardRef((props, ref: Ref<HTMLAnchorElement>) => (
					<a ref={ref} {...props} href={menuItem.url} target={itemTarget} />
			  ))
			: forwardRef((props, ref: Ref<HTMLAnchorElement>) => (
					<Link
						ref={ref}
						{...props}
						to={menuItem.url || ''}
						target={itemTarget}
					/>
			  )),
	};

	return (
		<ListItem disablePadding sx={{ display: 'block' }}>
			<ListItemButton
				{...listItemProps}
				disabled={menuItem?.disabled}
				sx={{
					...sx,
					minHeight: 48,
					justifyContent: open ? 'initial' : 'center',
					px: 2.5,
					//   borderRadius: '12 px',
					//   mb: 0.5,
					//   alignItems: 'flex-start',
					//   backgroundColor: level && level > 1 ? 'transparent !important' : 'inherit',
					//   py: level && level > 1 ? 1 : 1.25,
					//   pl: `${level && level * 24}px`,
				}}
				selected={
					isActive.findIndex((id: string | number) => id === menuItem.id) > -1
				}
				onClick={() => itemHandler(menuItem.id)}
			>
				<ListItemIcon
					sx={{
						minWidth: 0,
						mr: open ? 3 : 'auto',
						justifyContent: 'center',
					}}
				>
					<IconRender
						icon={menuItem?.icon}
						level={level && level}
						isActive={isActive}
						item={menuItem}
					/>
				</ListItemIcon>
				<ListItemText
					primary={menuItem?.title || 'Generic'}
					sx={{ opacity: open ? 1 : 0 }}
				/>
			</ListItemButton>
		</ListItem>
	);
}

export default MenuItem;
