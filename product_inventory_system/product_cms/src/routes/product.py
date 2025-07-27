from flask import Blueprint, jsonify, request

bp = Blueprint("product", __name__)

_FAKE_DB = [
    {"id": 1, "name": "Sample Product A"},
    {"id": 2, "name": "Sample Product B"},
]

@bp.route("/", methods=["GET"])
def list_products():
    return jsonify(_FAKE_DB)

@bp.route("/", methods=["POST"])
def add_product():
    new = request.json or {}
    new["id"] = len(_FAKE_DB) + 1
    _FAKE_DB.append(new)
    return jsonify(new), 201
