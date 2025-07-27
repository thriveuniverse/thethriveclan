from flask import Flask

def create_app():
    app = Flask(__name__)

    # --- register blueprints ---
    from .routes.product import bp as product_bp
    app.register_blueprint(product_bp, url_prefix="/products")

    # --- a simple landing route ---
    @app.route("/")
    def home():
        return "Hello, world! Product CMS package is alive. 🚀"

    return app
