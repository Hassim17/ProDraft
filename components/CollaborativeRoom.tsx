"use client";

import { ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { Editor } from "@/components/editor/Editor";
import Header from "@/components/Header";
import {
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
	UserButton,
} from "@clerk/nextjs";
import ActiveCollaborators from "./ActiveCollaborators";
import { Input } from "./ui/input";
import Image from "next/image";
import { updateDocument } from "@/lib/actions/room.actions";
import Loader from "./Loader";

const CollaborativeRoom = ({
	roomId,
	roomMetadata,
	users,
	currentUserType,
}: CollaborativeRoomProps) => {
	const [documentTitle, setDocumentTitle] = useState(roomMetadata.title);
	const [editing, setEditing] = useState(false);
	const [loading, setLoading] = useState(false);

	const containerRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleUpdateTitle = async () => {
		try {
			if (documentTitle !== roomMetadata.title) {
				setLoading(true);
				const updatedDocument = await updateDocument(
					roomId,
					documentTitle
				);

				if (updatedDocument) {
					setEditing(false);
					setLoading(false);
				}
			} else {
				setEditing(false);
			}
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		if (editing && inputRef.current) {
			inputRef.current.focus();
		}
	}, [editing]);

	return (
		<RoomProvider id={roomId}>
			<ClientSideSuspense fallback={<Loader />}>
				<div className="collaborative-room">
					<Header>
						<div
							ref={containerRef}
							className="flex w-fit items-center justify-center gap-2"
						>
							{editing && !loading ? (
								<Input
									type="text"
									value={documentTitle}
									ref={inputRef}
									placeholder="Enter title"
									onChange={(e) =>
										setDocumentTitle(e.target.value)
									}
									onKeyDown={(e) => {
										e.key === "Enter" &&
											handleUpdateTitle();
									}}
									disabled={!editing}
									className="document-title-input"
									onBlur={handleUpdateTitle}
								/>
							) : (
								<>
									<p className="document-title">
										{documentTitle}
									</p>
								</>
							)}
							{currentUserType == "editor" && !editing && (
								<Image
									src="/assets/icons/edit.svg"
									alt="edit"
									width={24}
									height={24}
									onClick={() => setEditing(true)}
									className="cursor-pointer"
								/>
							)}

							{currentUserType == "viewer" && !editing && (
								<p className="view-only-tag">View Only</p>
							)}

							{loading && (
								<p className="text-sm text-gray-400">
									saving...
								</p>
							)}
						</div>
						<div className="flex w-full flex-1 justify-end gap-2 sm:gap-3">
							<ActiveCollaborators />
							<SignedOut>
								<SignInButton />
								<SignUpButton />
							</SignedOut>
							<SignedIn>
								<UserButton />
							</SignedIn>
						</div>
					</Header>
					<Editor roomId={roomId} currentUserType={currentUserType} />
				</div>
			</ClientSideSuspense>
		</RoomProvider>
	);
};

export default CollaborativeRoom;
