const AbstractHandler = require('./AbstractHandler');
const Constants = require('../../../../util/Constants');

class MessageDeleteHandler extends AbstractHandler {
  handle(packet) {
    try {
      const client = this.packetManager.client;
      const data = packet.d;
      const response = client.actions.MessageDelete.handle(data);
      if (response && response.message) {
        client.emit(Constants.Events.MESSAGE_DELETE, response.message);
      }
    } catch (error) {
      // Error is silently ignored, nothing will be logged to the console
      return;
    }
  }
}

/**
 * Emitted whenever a message is deleted.
 * @event Client#messageDelete
 * @param {Message} message The deleted message
 */

module.exports = MessageDeleteHandler;