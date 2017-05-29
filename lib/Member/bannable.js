module.exports = Eris => {
	Object.defineProperty(Eris.Member.prototype, "bannable", {
		get: () => {
			const clientMember = this.guild.members.get(this.guild.shard.client.user.id);
			return clientMember.hasPermission("banMembers") && this.punishible(clientMember);
		}
	});
};