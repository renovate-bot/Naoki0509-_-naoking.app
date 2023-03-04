<<<<<<< HEAD
import { FC, ReactEventHandler, ReactNode } from "react";
=======
import { FC, ReactNode } from "react";
>>>>>>> main
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

export const LayoutFallback = ({ error }: FallbackProps) => {
	return (
		<div>
			<p>Something went wrong:</p>
			<pre>{error.message}</pre>
		</div>
	);
};

export const LayoutErrorBandry: FC<{ children: ReactNode }> = ({
	children,
}) => {
	return (
		<ErrorBoundary FallbackComponent={LayoutFallback}>{children}</ErrorBoundary>
	);
};
