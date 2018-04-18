from twilio.rest import Client

class Notifications:
    def __init__(self):
        self.account_sid = "AC654184a0b3f3013f2a3a2460fb549b59"
        self.auth_token = "9c0d854d91f329393e3ebef02291603a"
        self.phone_number = "+14807198702"
        self.client = Client(self.account_sid, self.auth_token)

    ## phone numbers: "+1**********" ---> +1 represents country code
    def send_msg(self, phone_number, msg):
        client = self.client
        message = client.messages.create(
            to=phone_number,
            from_=self.phone_number,
            body=msg
        )
