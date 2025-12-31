import http.server
import os
import posixpath
import sys
from urllib.parse import unquote


class CleanUrlHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path: str) -> str:
        # Map URL paths like /features -> /features.html when appropriate.
        path = path.split("?", 1)[0].split("#", 1)[0]
        path = unquote(path)

        if path == "/":
            path = "/index.html"
        else:
            # If no extension and no trailing slash, try .html
            if not posixpath.splitext(path)[1] and not path.endswith("/"):
                path = f"{path}.html"
            # If trailing slash, try index.html under that folder
            if path.endswith("/"):
                path = f"{path}index.html"

        return super().translate_path(path)

    def end_headers(self) -> None:
        # Disable caching for a nicer dev experience
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


def main() -> None:
    port = 5173
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            pass

    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    server = http.server.ThreadingHTTPServer(("127.0.0.1", port), CleanUrlHandler)
    print(f"Serving with clean-url rewrites on http://127.0.0.1:{port}")
    server.serve_forever()


if __name__ == "__main__":
    main()
