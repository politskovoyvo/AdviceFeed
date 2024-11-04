import { isElement, sortNodes, getNextIndex, getPrevIndex } from './utils.js';

class DescendantsManager {
    descendants = new Map();
    register = (nodeOrOptions) => {
        if (nodeOrOptions == null)
            return;
        if (isElement(nodeOrOptions)) {
            return this.registerNode(nodeOrOptions);
        }
        return (node) => {
            this.registerNode(node, nodeOrOptions);
        };
    };
    unregister = (node) => {
        this.descendants.delete(node);
        const sorted = sortNodes(Array.from(this.descendants.keys()));
        this.assignIndex(sorted);
    };
    destroy = () => {
        this.descendants.clear();
    };
    assignIndex = (descendants) => {
        this.descendants.forEach((descendant) => {
            const index = descendants.indexOf(descendant.node);
            descendant.index = index;
            descendant.node.dataset['index'] = descendant.index.toString();
        });
    };
    count = () => this.descendants.size;
    enabledCount = () => this.enabledValues().length;
    values = () => {
        const values = Array.from(this.descendants.values());
        return values.sort((a, b) => a.index - b.index);
    };
    enabledValues = () => {
        return this.values().filter((descendant) => !descendant.disabled);
    };
    item = (index) => {
        if (this.count() === 0)
            return undefined;
        return this.values()[index];
    };
    enabledItem = (index) => {
        if (this.enabledCount() === 0)
            return undefined;
        return this.enabledValues()[index];
    };
    first = () => this.item(0);
    firstEnabled = () => this.enabledItem(0);
    last = () => this.item(this.descendants.size - 1);
    lastEnabled = () => {
        const lastIndex = this.enabledValues().length - 1;
        return this.enabledItem(lastIndex);
    };
    indexOf = (node) => {
        if (!node)
            return -1;
        return this.descendants.get(node)?.index ?? -1;
    };
    enabledIndexOf = (node) => {
        if (node == null)
            return -1;
        return this.enabledValues().findIndex((i) => i.node.isSameNode(node));
    };
    next = (index, loop = true) => {
        const next = getNextIndex(index, this.count(), loop);
        return this.item(next);
    };
    nextEnabled = (index, loop = true) => {
        const item = this.item(index);
        if (!item)
            return;
        const enabledIndex = this.enabledIndexOf(item.node);
        const nextEnabledIndex = getNextIndex(enabledIndex, this.enabledCount(), loop);
        return this.enabledItem(nextEnabledIndex);
    };
    prev = (index, loop = true) => {
        const prev = getPrevIndex(index, this.count() - 1, loop);
        return this.item(prev);
    };
    prevEnabled = (index, loop = true) => {
        const item = this.item(index);
        if (!item)
            return;
        const enabledIndex = this.enabledIndexOf(item.node);
        const prevEnabledIndex = getPrevIndex(enabledIndex, this.enabledCount() - 1, loop);
        return this.enabledItem(prevEnabledIndex);
    };
    registerNode = (node, options) => {
        if (!node || this.descendants.has(node))
            return;
        const keys = Array.from(this.descendants.keys()).concat(node);
        const sorted = sortNodes(keys);
        if (options?.disabled) {
            options.disabled = !!options.disabled;
        }
        const descendant = { node, index: -1, ...options };
        this.descendants.set(node, descendant);
        this.assignIndex(sorted);
    };
}

export { DescendantsManager };
