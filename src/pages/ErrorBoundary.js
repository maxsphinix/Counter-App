import React from "react";

class ErrorBoundary extends React.Component {
  //   state = {
  //     error: null,
  //   };
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  //   static getDerivedStateFromError(error) {
  //     // Update state so next render shows fallback UI.
  //     return { hasError: true };
  //   }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    // logErrorToExampleService(error, info);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.errorInfo) {
      // You can render any custom fallback UI
      return (
        <div>
          <h2>Something went wrong</h2>
          <details>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;