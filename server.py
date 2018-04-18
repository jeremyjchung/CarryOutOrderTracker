from flask import Flask, request
from flask_restful import reqparse, abort, Resource, Api

app = Flask(__name__)
api = Api(app)

ORDERS = {}

def abort_error(order_id):
    if order_id not in ORDERS:
        abort(404, message="Todo {} doesn't exist".format(order_id))

parser = reqparse.RequestParser()
parser.add_argument('items', action='append')
parser.add_argument('name')
parser.add_argument('phone_number')
parser.add_argument('phase', default='idle')

class Order(Resource):
    def get(self, order_id):
        abort_error(order_id)
        return ORDERS[order_id]

    def put(self, order_id):
        abort_error(order_id)
        args = parser.parse_args()
        ORDERS[order_id]['phase'] = args['phase']
        return ORDERS[order_id]

    def delete(self, order_id):
        abort_error(order_id)
        order = ORDERS[order_id]
        del ORDERS[order_id]
        return order

class Orders(Resource):
    def get(self):
        return ORDERS

    def post(self):
        args = parser.parse_args()
        order_id = id(args)
        ORDERS[order_id] = {
            'id': order_id,
            'name': args['name'],
            'items': args['items'],
            'phone_number': args['phone_number'],
            'phase': args['phase']
        }
        return ORDERS[order_id]

api.add_resource(Order, '/orders/<int:order_id>')
api.add_resource(Orders, '/orders')

if __name__ == '__main__':
    app.run(debug=True)
