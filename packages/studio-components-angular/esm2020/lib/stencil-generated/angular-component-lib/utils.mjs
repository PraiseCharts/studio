/* eslint-disable */
/* tslint:disable */
import { fromEvent } from 'rxjs';
export const proxyInputs = (Cmp, inputs) => {
    const Prototype = Cmp.prototype;
    inputs.forEach(item => {
        Object.defineProperty(Prototype, item, {
            get() {
                return this.el[item];
            },
            set(val) {
                this.z.runOutsideAngular(() => (this.el[item] = val));
            }
        });
    });
};
export const proxyMethods = (Cmp, methods) => {
    const Prototype = Cmp.prototype;
    methods.forEach(methodName => {
        Prototype[methodName] = function () {
            const args = arguments;
            return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
        };
    });
};
export const proxyOutputs = (instance, el, events) => {
    events.forEach(eventName => instance[eventName] = fromEvent(el, eventName));
};
export const defineCustomElement = (tagName, customElement) => {
    if (customElement !== undefined &&
        typeof customElements !== 'undefined' &&
        !customElements.get(tagName)) {
        customElements.define(tagName, customElement);
    }
};
// tslint:disable-next-line: only-arrow-functions
export function ProxyCmp(opts) {
    const decorator = function (cls) {
        const { defineCustomElementFn, inputs, methods } = opts;
        if (defineCustomElementFn !== undefined) {
            defineCustomElementFn();
        }
        if (inputs) {
            proxyInputs(cls, inputs);
        }
        if (methods) {
            proxyMethods(cls, methods);
        }
        return cls;
    };
    return decorator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hbmd1bGFyL3Byb2plY3RzL3N0dWRpby1jb21wb25lbnRzLWFuZ3VsYXIvc3JjL2xpYi9zdGVuY2lsLWdlbmVyYXRlZC9hbmd1bGFyLWNvbXBvbmVudC1saWIvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWpDLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxDQUFDLEdBQVEsRUFBRSxNQUFnQixFQUFFLEVBQUU7SUFDeEQsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUNoQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3BCLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRTtZQUNyQyxHQUFHO2dCQUNELE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixDQUFDO1lBQ0QsR0FBRyxDQUFDLEdBQVE7Z0JBQ1YsSUFBSSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4RCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxHQUFRLEVBQUUsT0FBaUIsRUFBRSxFQUFFO0lBQzFELE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDaEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUMzQixTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUc7WUFDdEIsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FDbkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FDekMsQ0FBQztRQUNKLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLENBQUMsUUFBYSxFQUFFLEVBQU8sRUFBRSxNQUFnQixFQUFFLEVBQUU7SUFDdkUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDOUUsQ0FBQyxDQUFBO0FBRUQsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxPQUFlLEVBQUUsYUFBa0IsRUFBRSxFQUFFO0lBQ3pFLElBQ0UsYUFBYSxLQUFLLFNBQVM7UUFDM0IsT0FBTyxjQUFjLEtBQUssV0FBVztRQUNyQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQzVCO1FBQ0EsY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7S0FDL0M7QUFDSCxDQUFDLENBQUE7QUFFRCxpREFBaUQ7QUFDakQsTUFBTSxVQUFVLFFBQVEsQ0FBQyxJQUF5RTtJQUNoRyxNQUFNLFNBQVMsR0FBRyxVQUFVLEdBQVE7UUFDbEMsTUFBTSxFQUFFLHFCQUFxQixFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFFeEQsSUFBSSxxQkFBcUIsS0FBSyxTQUFTLEVBQUU7WUFDdkMscUJBQXFCLEVBQUUsQ0FBQztTQUN6QjtRQUVELElBQUksTUFBTSxFQUFFO1lBQ1YsV0FBVyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMxQjtRQUNELElBQUksT0FBTyxFQUFFO1lBQ1gsWUFBWSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjb25zdCBwcm94eUlucHV0cyA9IChDbXA6IGFueSwgaW5wdXRzOiBzdHJpbmdbXSkgPT4ge1xuICBjb25zdCBQcm90b3R5cGUgPSBDbXAucHJvdG90eXBlO1xuICBpbnB1dHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUHJvdG90eXBlLCBpdGVtLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsW2l0ZW1dO1xuICAgICAgfSxcbiAgICAgIHNldCh2YWw6IGFueSkge1xuICAgICAgICB0aGlzLnoucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gKHRoaXMuZWxbaXRlbV0gPSB2YWwpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgcHJveHlNZXRob2RzID0gKENtcDogYW55LCBtZXRob2RzOiBzdHJpbmdbXSkgPT4ge1xuICBjb25zdCBQcm90b3R5cGUgPSBDbXAucHJvdG90eXBlO1xuICBtZXRob2RzLmZvckVhY2gobWV0aG9kTmFtZSA9PiB7XG4gICAgUHJvdG90eXBlW21ldGhvZE5hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHJldHVybiB0aGlzLnoucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT5cbiAgICAgICAgdGhpcy5lbFttZXRob2ROYW1lXS5hcHBseSh0aGlzLmVsLCBhcmdzKVxuICAgICAgKTtcbiAgICB9O1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBwcm94eU91dHB1dHMgPSAoaW5zdGFuY2U6IGFueSwgZWw6IGFueSwgZXZlbnRzOiBzdHJpbmdbXSkgPT4ge1xuICBldmVudHMuZm9yRWFjaChldmVudE5hbWUgPT4gaW5zdGFuY2VbZXZlbnROYW1lXSA9IGZyb21FdmVudChlbCwgZXZlbnROYW1lKSk7XG59XG5cbmV4cG9ydCBjb25zdCBkZWZpbmVDdXN0b21FbGVtZW50ID0gKHRhZ05hbWU6IHN0cmluZywgY3VzdG9tRWxlbWVudDogYW55KSA9PiB7XG4gIGlmIChcbiAgICBjdXN0b21FbGVtZW50ICE9PSB1bmRlZmluZWQgJiZcbiAgICB0eXBlb2YgY3VzdG9tRWxlbWVudHMgIT09ICd1bmRlZmluZWQnICYmXG4gICAgIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKVxuICApIHtcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgY3VzdG9tRWxlbWVudCk7XG4gIH1cbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBvbmx5LWFycm93LWZ1bmN0aW9uc1xuZXhwb3J0IGZ1bmN0aW9uIFByb3h5Q21wKG9wdHM6IHsgZGVmaW5lQ3VzdG9tRWxlbWVudEZuPzogKCkgPT4gdm9pZCwgaW5wdXRzPzogYW55OyBtZXRob2RzPzogYW55IH0pIHtcbiAgY29uc3QgZGVjb3JhdG9yID0gZnVuY3Rpb24gKGNsczogYW55KSB7XG4gICAgY29uc3QgeyBkZWZpbmVDdXN0b21FbGVtZW50Rm4sIGlucHV0cywgbWV0aG9kcyB9ID0gb3B0cztcblxuICAgIGlmIChkZWZpbmVDdXN0b21FbGVtZW50Rm4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuKCk7XG4gICAgfVxuXG4gICAgaWYgKGlucHV0cykge1xuICAgICAgcHJveHlJbnB1dHMoY2xzLCBpbnB1dHMpO1xuICAgIH1cbiAgICBpZiAobWV0aG9kcykge1xuICAgICAgcHJveHlNZXRob2RzKGNscywgbWV0aG9kcyk7XG4gICAgfVxuICAgIHJldHVybiBjbHM7XG4gIH07XG4gIHJldHVybiBkZWNvcmF0b3I7XG59XG4iXX0=